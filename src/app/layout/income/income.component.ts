import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';
import { IncomeService } from '../service/income.service';
import { MatDialog } from '@angular/material';
import { IncomeModalComponent } from '../modal/incomemodal/category-modal.component';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
 selector:'app-income',
 templateUrl:'./income.component.html',
 styleUrls:['./income.component.scss']
})
export class IncomeComponent implements OnInit{

 incomes=[]
 chart:any

 constructor(private incomeService:IncomeService,
private dialog:MatDialog,
private loader:LoaderService

 ){}

 ngOnInit(){

   this.loadIncome()

 }
 openAddIncome(){


  let data={
    type:'add'
  }
  this.dialog.open(IncomeModalComponent,{
    width:'50%',
    data:data
  })
  .afterClosed()
  .subscribe(res=>{
 
    if(res){
      this.loadIncome()
    }
 
  })
 
 }
 deleteIncome(ele){
  let data={
    type:'delete',
    data:ele
  }
  this.dialog.open(IncomeModalComponent,{
    width:'50%',
    data:data
  })
  .afterClosed()
  .subscribe(res=>{
 
    if(res){
      this.loadIncome()
    }
 
  })

 }
 loadIncome(){
  const api$=   this.loader.showLoaderUntilCompleted(
  this.incomeService.getAllIncome())
  api$.subscribe((res:any)=>{

    this.incomes=res

    this.createChart()

  })

 }

 createChart(){

   const labels=this.incomes.map(i=>i.date)
   const data=this.incomes.map(i=>i.amount)

   this.chart=new Chart("incomeChart",{

     type:'line',

     data:{
       labels:labels,
       datasets:[
         {
           label:'Income',
           data:data,
           borderColor:'#6c2bd9',
           backgroundColor:'rgba(108,43,217,0.2)',
           fill:true
         }
       ]
     },

     options:{
       responsive:true
     }

   })

 }

}