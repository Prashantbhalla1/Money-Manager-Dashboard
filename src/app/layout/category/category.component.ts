import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryModalComponent } from '../modal/categorymodal/category-modal.component';
import { MatDialog } from '@angular/material';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
 selector:'app-category',
 templateUrl:'./category.component.html',
 styleUrls:['./category.component.scss']
})
export class CategoryComponent implements OnInit{

 categories:[]=[]

 constructor(private categoryService:CategoryService,
private dialog:MatDialog,
private loader:LoaderService

 ){}

 ngOnInit(){

 this.loadCategories();

 }
 loadCategories(){
  const api$=   this.loader.showLoaderUntilCompleted(
  this.categoryService.getAllCategory())
  api$.subscribe((res:any)=>{
    this.categories=res
 })
 }

 openCategoryModal(){
  let data={
    type:'add'
  }
  const dialogRef = this.dialog.open(CategoryModalComponent,{
    width:"50%",
    data:data
  });
 
  dialogRef.afterClosed().subscribe(res=>{
    if(res){
      this.loadCategories(); // refresh list
    }
  });

}
editCategory(ele)
{
  let data={
    type:'edit',
    data:ele
  }
  const dialogRef = this.dialog.open(CategoryModalComponent,{
  width:"50%",
  data:data
});

dialogRef.afterClosed().subscribe(res=>{
  if(res){
    this.loadCategories(); // refresh list
  }
});
}
deleteCategory(ele){
  
  let data={
    type:'delete',
    data:ele
  }
  const dialogRef = this.dialog.open(CategoryModalComponent,{
  width:"50%",
  data:data
});

dialogRef.afterClosed().subscribe(res=>{
  if(res){
    this.loadCategories(); // refresh list
  }
});

}
}