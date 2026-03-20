import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from '../service/filter.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
 selector:'app-filter',
 templateUrl:'./filter.component.html',
 styleUrls:['./filter.component.scss']
})
export class FilterComponent implements OnInit{

 filterForm:FormGroup
 transactions:any[]=[]

 constructor(
  private fb:FormBuilder,
  private filterService:FilterService,
  private loader:LoaderService
 ){}

 ngOnInit(){

  this.filterForm=this.fb.group({

   type:['Income'],
   startDate:[''],
   endDate:[''],
   sortField:['date'],
   sortOrder:['asc'],
   search:['']

  })

 }

 applyFilter(){
    const api$=   this.loader.showLoaderUntilCompleted(
  this.filterService
  .filterTransactions(this.filterForm.value))

  api$.subscribe((res:any)=>{

   this.transactions=res

  })

 }

}