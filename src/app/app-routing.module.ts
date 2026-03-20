import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login_copy/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginOgComponent } from './loginog/loginog.component';


const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginOgComponent
  },
  {
    path:'layout-dashboard',
    loadChildren:()=>import("./layout/layout.module").then((m)=>m.LayoutModule1)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}