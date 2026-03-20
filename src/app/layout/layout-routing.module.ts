import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashbaord/dashbaord.component';
import { CategoryComponent } from './category/category.component';
import { IncomeComponent } from './income/income.component';
import { ExpanseComponent } from './expanse/expanse.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'income',
        component: IncomeComponent

      },
      {
        path: 'expense',
        component: ExpanseComponent

      },
      {
        path: 'filters',
        component: FilterComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}