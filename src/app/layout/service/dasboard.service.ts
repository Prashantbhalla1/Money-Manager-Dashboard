import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class DashboardService{

  private API="https://money-manager-kj9q.onrender.com";

  constructor(private http:HttpClient){}

  getDashboard(){
    return this.http.get(this.API+'/dashboard');
  }

}