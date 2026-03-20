import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login_copy/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginOgComponent } from './loginog/loginog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule1 } from './layout/layout.module';
import { AuthInterceptor } from './auth.interceptor';
import { MatButtonModule, MatDatepicker, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSnackBar, MatSnackBarModule } from '@angular/material';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CategoryModalComponent } from './layout/modal/categorymodal/category-modal.component';
import { IncomeModalComponent } from './layout/modal/incomemodal/category-modal.component';
import { ExpenseModalComponent } from './layout/modal/expansemodal/category-modal.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginOgComponent,
    CategoryModalComponent,
    IncomeModalComponent,
    ExpenseModalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule1,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    
   
  ],
  providers: [
{
  provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true
}

  ],
  bootstrap: [AppComponent],
  entryComponents:[
    CategoryModalComponent,
    IncomeModalComponent,
    ExpenseModalComponent
  ]
})
export class AppModule { }
