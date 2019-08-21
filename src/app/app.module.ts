import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsMapModule } from 'angular-us-map';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsMapModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
