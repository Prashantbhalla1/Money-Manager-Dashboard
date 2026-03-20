import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExpanseService } from '../../service/expanse.service';
import { CategoryService } from '../../service/category.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
 selector:'app-expense-modal',
 templateUrl: "./category-modal.component.html",
 styleUrls: ["./category-modal.component.scss"]
})
export class ExpenseModalComponent implements OnInit{

 expenseForm:FormGroup
 categories:any[]=[]

 constructor(
  private fb:FormBuilder,
  private expanseService:ExpanseService,
  private categoryService:CategoryService,
  public dialogRef:MatDialogRef<ExpenseModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private loader:LoaderService
 ){}
 pageType
 ngOnInit(){
    this.pageType=this.data['type']
  this.expenseForm=this.fb.group({

   name:['',Validators.required],
   categoryId:['',Validators.required],
   amount:['',Validators.required],
   date:['',Validators.required]

  })

  this.loadCategories()

 }

 loadCategories(){

    const api$=   this.loader.showLoaderUntilCompleted(
  this.categoryService.getAllCategory())
  api$
  .subscribe((res:any)=>{

   this.categories=res.filter(x=>x.type=='Expense')

  })

 }

 addExpense(){

  if(this.expenseForm.valid){
    const api$=   this.loader.showLoaderUntilCompleted(
   this.expanseService.addExpanse(this.expenseForm.value))
   api$
   .subscribe(()=>{

    this.dialogRef.close(true)

   })

  }

 }

 close(){
  this.dialogRef.close()
 }
 delete(){
    const api$=this.expanseService.delete(this.data.data.id);
    this.loader.showLoaderUntilCompleted(api$).subscribe((e)=>{
      this.dialogRef.close(true);
    })
   }

}