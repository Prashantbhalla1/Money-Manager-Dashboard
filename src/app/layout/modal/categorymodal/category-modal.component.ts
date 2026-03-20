import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CategoryService } from "../../service/category.service";
import { LoaderService } from "src/app/loader/loader.service";

@Component({
 selector: "app-category-modal",
 templateUrl: "./category-modal.component.html",
 styleUrls: ["./category-modal.component.scss"]
})
export class CategoryModalComponent implements OnInit {

 categoryForm!: FormGroup;

 constructor(
   private fb: FormBuilder,
   private categoryService: CategoryService,
   private snackBar: MatSnackBar,
   public dialogRef: MatDialogRef<CategoryModalComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   private loader:LoaderService
 ) {}
pageType
 ngOnInit(): void {

this.pageType=this.data['type']

   this.categoryForm = this.fb.group({
     name: ["", Validators.required],
     type: ["Income", Validators.required],
     icon: ["💰"]
   });
   if(this.pageType=='edit'){
    this.categoryForm.patchValue({
      name:this.data.data.name,
      type:this.data.data.type
    })
   }


 }

 addCategory(){

   if(this.categoryForm.valid){
   if(this.pageType=='add')
    { const api$=   this.loader.showLoaderUntilCompleted(
     this.categoryService.addCategory(this.categoryForm.value))
     api$
     .subscribe(res=>{

       this.snackBar.open("Category created", "Close", {
         duration:2000
       });

       this.dialogRef.close(true);

     });}
     else{
      const api$=   this.loader.showLoaderUntilCompleted(
        this.categoryService.editCategory(this.categoryForm.value,this.data.data.id))
        api$
        .subscribe(res=>{
   
          this.snackBar.open("Edit Success", "Close", {
            duration:2000
          });
   
          this.dialogRef.close(true);
   
        });
     }

   }

 }

 close(){
   this.dialogRef.close();
 }

delete(){
  const api$=   this.loader.showLoaderUntilCompleted(
    this.categoryService.delete(this.data.data.id))
    api$
    .subscribe(res=>{

      this.snackBar.open("Deleted Successfully", "Close", {
        duration:2000
      });

      this.dialogRef.close(true);

    });
}
}