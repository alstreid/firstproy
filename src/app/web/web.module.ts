import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { WebComponent } from './web.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule

  ],
  exports: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    WebComponent
  ]
})
export class WebModule { }
