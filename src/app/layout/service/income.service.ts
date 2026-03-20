import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn:'root'
})
export class IncomeService{

 API="https://money-manager-kj9q.onrender.com/income";

 constructor(private http:HttpClient){}

 getAllIncome(){
   return this.http.get(this.API+'/getCurrentMonth');
 }
 addIncome(data){
    return this.http.post(this.API+'/add',data);
 }
 delete(id){
 
  return this.http.post(this.API+'/delete/'+id,null);
 }

}