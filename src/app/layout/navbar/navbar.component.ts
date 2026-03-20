import { Component } from '@angular/core';

@Component({
 selector:'app-navbar',
 templateUrl:'./navbar.component.html',
 styleUrls:['./navbar.component.scss']
})
export class NavbarComponent{

 showMenu=false
userData
 ngOnInit(){
  this.userData=JSON.parse( localStorage.getItem("user"));
  this.userName=this.userData['fullName'];
  this.email=this.userData['email'];
 }

 userName="Prashant"
 email="prashant@gmail.com"

 toggleMenu(){
  this.showMenu=!this.showMenu
 }

 logout(){

  localStorage.clear()
  window.location.href="/"

 }

}