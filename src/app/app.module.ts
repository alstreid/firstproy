import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { WebModule } from './web/web.module';
import { WebRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeComponent } from './home/home.component';
import { NoPagesFoundComponent } from './web/no-pages-found/no-pages-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPagesFoundComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WebModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
