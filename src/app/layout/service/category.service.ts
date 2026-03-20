import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CategoryService{

  private API="http://localhost:8080/categories";

  constructor(private http:HttpClient){}

  getAllCategory(){
    return this.http.get(this.API+'/get');
  }
  addCategory(data){
    return this.http.post(this.API+'/add',data);
  }

editCategory(data,id){
    return this.http.post(this.API+'/update/'+id,data);
  }
delete(id){
  
  return this.http.post(this.API+'/delete/'+id,null);
}
}