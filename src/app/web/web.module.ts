import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

import { SharedModule } from '../shared/shared.module';

import { WebComponent } from './web.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { WebRoutingModule } from './web-routing.module';



@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    NoPagesFoundComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    WebRoutingModule,
    // RouterModule

  ],
  exports: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    NoPagesFoundComponent,
    WebComponent
  ]
})
export class WebModule { }
