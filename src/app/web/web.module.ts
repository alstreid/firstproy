import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
