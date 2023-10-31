import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { WebRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    WebModule,
    AppRoutingModule,
    WebRoutingModule,
    AuthRoutingModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
