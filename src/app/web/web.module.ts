import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    NoPagesFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
