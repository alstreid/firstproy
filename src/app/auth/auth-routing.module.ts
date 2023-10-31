import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    RouterModule,
  ],
  exports: [RouterModule]
  
})
export class AuthRoutingModule { }
