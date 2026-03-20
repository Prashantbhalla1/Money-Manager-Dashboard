import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn:'root'
})
export class FilterService{

 API="http://localhost:8080/dashboard"

 constructor(private http:HttpClient){}

 filterTransactions(data:any):Observable<any>{

  return this.http.post(this.API+'/getAll/filter',data)

 }

}