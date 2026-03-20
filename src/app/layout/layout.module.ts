import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashbaord/dashbaord.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { IncomeComponent } from './income/income.component';
import { ExpanseComponent } from './expanse/expanse.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepicker, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryComponent,
    IncomeComponent,
    ExpanseComponent,
    FilterComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
   LayoutRoutingModule,
   ReactiveFormsModule,
   ReactiveFormsModule,
   MatDialogModule,
   MatInputModule,
   MatSelectModule,
   MatButtonModule,
   MatIconModule,
   MatSnackBarModule,
   MatDatepickerModule,
   MatNativeDateModule
   
  ],
  providers: []
})
export class LayoutModule1 { }
