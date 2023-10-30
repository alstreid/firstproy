import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from '../app-routing.module';


const routes: Routes = [
  {
    path: 'dashboard/', component: WebComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class WebRoutingModule { }
