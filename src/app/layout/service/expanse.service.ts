import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn:'root'
})
export class ExpanseService{

 API="http://localhost:8080/expanse"

 constructor(private http:HttpClient){}

 getAllExpanse():Observable<any>{
  return this.http.get(this.API+'/getCurrentMonth')
 }

 addExpanse(data:any){
  return this.http.post(this.API+'/add',data)
 }
 delete(id){
 
    return this.http.post(this.API+'/delete/'+id,null);
   }

}