import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from '../app-routing.module';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';


const routes: Routes = [
  {
    path: 'dashboard', component: WebComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
      
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
