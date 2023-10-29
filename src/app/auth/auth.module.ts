import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    NoPagesFoundComponent,
    RegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    NoPagesFoundComponent,
    RegisterComponent,
    UserComponent
  ]
})
export class AuthModule { }
