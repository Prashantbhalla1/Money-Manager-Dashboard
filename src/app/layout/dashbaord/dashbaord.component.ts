import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dasboard.service';
import * as Chart from 'chart.js';
import { LoaderService } from 'src/app/loader/loader.service';
@Component({
 selector:'app-dashboard',
 templateUrl:'./dashbaord.component.html',
 styleUrls:['./dashbaord.component.scss']
})
export class DashboardComponent implements OnInit{

 dashboardData;
 chart
 totalBalance:number=0;

 constructor(private dashboardService:DashboardService,

  private loader:LoaderService
 ){}

 ngOnInit(){


  const api$=   this.loader.showLoaderUntilCompleted(
   this.dashboardService.getDashboard())
   api$.subscribe((res:any)=>{

     this.dashboardData=res;

     this.totalBalance=res.totalIncome-res.totalExpanse;
     this.createChart();

   })

 }
 createChart(){

  const ctx = document.getElementById('financeChart');
  
  this.chart = new Chart(ctx,{
  
   type:'doughnut',
  
   data:{
  
    labels:[
     'Total Balance',
     'Total Income',
     'Total Expense'
    ],
  
    datasets:[{
  
     data:[
      this.totalBalance,
      this.dashboardData.totalIncome,
      this.dashboardData.totalExpanse
     ],
  
     backgroundColor:[
      '#6c2bd9',
      '#1e7e34',
      '#d32f2f'
     ],
  
     borderWidth:0
  
    }]
  
   },
  
   options:{
    cutoutPercentage:70,
    legend:{
     position:'bottom'
    }
   }
  
  })
  
  }

}