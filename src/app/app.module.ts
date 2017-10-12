import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from '@angular/http';
import { DataserviceService } from "./dataservice.service";

@NgModule({
  declarations: [
    AppComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 

  ],
  providers: [DataserviceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
