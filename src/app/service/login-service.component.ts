import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable({
    providedIn:'root'
})

export class LoginService{


base_url='https://money-manager-kj9q.onrender.com'
constructor(private http:HttpClient){}


createProfile(data){
    let url=this.base_url+'/register'
    return this.http.post(url,data);
}

login(data){
    let url=this.base_url+'/login'
    return this.http.post(url,data);
}

}