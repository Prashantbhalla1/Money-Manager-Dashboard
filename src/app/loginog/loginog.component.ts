import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login-service.component';
import { Route, Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginog.component.html',
  styleUrls: ['./loginog.component.scss']
})
export class LoginOgComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService:LoginService,
    private router: Router,
    private loaderService:LoaderService
  ) {

    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

  }

  onSubmit(){

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let payLoad={
    
        'email':this.loginForm.get('email').value,
        'password':this.loginForm.get('password').value,

      }
const api$=this.loaderService.showLoaderUntilCompleted( this.loginService.login(payLoad))

 api$.subscribe((e)=>{
  console.log('login created success',e)
  localStorage.setItem('token',e['token'])
  localStorage.setItem('user',JSON.stringify( e['user']));

  
  this.router.navigate(['/layout-dashboard']);


})
    }

  }

}