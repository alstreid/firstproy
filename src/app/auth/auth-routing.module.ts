import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 
];


@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    RouterModule,
  ]
})
export class AuthRoutingModule { }
