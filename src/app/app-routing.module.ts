import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebModule } from './web/web.module';
import { WebRoutingModule } from './web/web-routing.module';
import { NoPagesFoundComponent } from './web/no-pages-found/no-pages-found.component';


const routes: Routes = [
  { path: '**', component:NoPagesFoundComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  // { path: 'dashborad/', component:WebComponent}
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

];


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    WebRoutingModule
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }
