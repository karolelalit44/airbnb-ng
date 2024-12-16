import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';


// app.module.ts
@NgModule({
  declarations: [
    
    

  ], 
  imports: [
    BrowserModule,
    
    CommonModule,
    AppRoutingModule,
    SharedModule 
  ],
  bootstrap: [],

})
export class AppModule { }
