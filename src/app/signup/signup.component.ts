import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login-service.component';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
private loginService:LoginService,
private loader:LoaderService

  ) {

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  onSubmit() {

    if(this.signupForm.valid){
      console.log(this.signupForm.value);
      let payLoad={
        'fullName':this.signupForm.get('name').value,
        'email':this.signupForm.get('email').value,
        'password':this.signupForm.get('password').value,

      }

   const api$=   this.loader.showLoaderUntilCompleted(
this.loginService.createProfile(payLoad))

api$.subscribe((e)=>{
  console.log('profile created success')
})

    }

  }

}