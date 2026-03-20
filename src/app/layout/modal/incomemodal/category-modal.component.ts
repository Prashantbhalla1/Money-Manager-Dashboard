import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IncomeService } from "../../service/income.service";
import { CategoryService } from "../../service/category.service";
import { LoaderService } from "src/app/loader/loader.service";

@Component({
 selector: "app-income-modal",
 templateUrl: "./category-modal.component.html",
 styleUrls: ["./category-modal.component.scss"]
})
export class IncomeModalComponent implements OnInit {

 incomeForm: FormGroup;

 categories:any[]=[];

 constructor(
   private fb: FormBuilder,
   private incomeService: IncomeService,
   private categoryService: CategoryService,
   public dialogRef: MatDialogRef<IncomeModalComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   private loader:LoaderService
 ) {}
pageType
 ngOnInit(){
this.pageType=this.data['type']
   this.incomeForm=this.fb.group({

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

     this.categories=res.filter(c=>c.type=="Income")

   })

 }

 addIncome(){

   if(this.incomeForm.valid){

     this.incomeService.addIncome(this.incomeForm.value)
     .subscribe(()=>{

       this.dialogRef.close(true)

     })

   }

 }

 close(){
   this.dialogRef.close()
 }
 delete(){
  const api$=this.incomeService.delete(this.data.data.id);
  this.loader.showLoaderUntilCompleted(api$).subscribe((e)=>{
    this.dialogRef.close(true);
  })
 }

}