import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
   	routingComponents 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
