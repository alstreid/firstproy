import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebModule } from './web/web.module';


const routes: Routes = [
  // { path: '**/', component:NoPagesFoundComponent}
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  // { path: 'dashborad/', component:WebComponent}
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

];


@NgModule({
  // declarations: [],
  imports: [
    WebModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }
