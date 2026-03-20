import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as Chart from 'chart.js';
import { ExpanseService } from '../service/expanse.service';
import { ExpenseModalComponent } from '../modal/expansemodal/category-modal.component';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
 selector:'app-expense',
 templateUrl:'./expanse.component.html',
 styleUrls:['./expanse.component.scss']
})
export class ExpanseComponent implements OnInit{

 expanses:any[]=[]
 chart:any

 constructor(
  private expanseService:ExpanseService,
  private dialog:MatDialog,
  private loader:LoaderService
 ){}

 ngOnInit(){

  this.loadExpanse()

 }

 loadExpanse(){

  const api$=   this.loader.showLoaderUntilCompleted(
  this.expanseService.getAllExpanse())

  api$.subscribe((res:any)=>{

    this.expanses=res

    this.createChart()

  })

 }

 createChart(){

 const labels=this.expanses.map(x=>x.date)
 const data=this.expanses.map(x=>x.amount)

 new Chart("expenseChart",{

  type:'line',

  data:{
   labels:labels,
   datasets:[{
    label:'Expense',
    data:data,
    borderColor:'#7b1fa2',
    backgroundColor:'rgba(123,31,162,0.15)',
    fill:true
   }]
  },

  options:{
   responsive:true
  }

 })

 }

 openAddExpense(){
let data={
  type:'add'
}
  this.dialog.open(ExpenseModalComponent,{
   width:'50%',
   data:data
  })
  .afterClosed()
  .subscribe(res=>{

   if(res){
    this.loadExpanse()
   }

  })

 }
 deleteExpense(ele){
  let data={
    type:'delete',
    data:ele
  }
  this.dialog.open(ExpenseModalComponent,{
    width:'50%',
    data:data
   })
   .afterClosed()
   .subscribe(res=>{
 
    if(res){
     this.loadExpanse()
    }
 
   })
 }

}