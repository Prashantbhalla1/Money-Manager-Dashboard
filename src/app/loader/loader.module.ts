import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
//import { LoaderComponent } from './loader.component';

@NgModule({
    imports: [CommonModule, RouterModule,NgxLoadingModule],
    declarations: [],
    exports: []
})
export class LoaderModule {}
