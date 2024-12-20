import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

// app.module.ts
@NgModule({
  declarations: [
     
  ],
  imports: [
    InfiniteScrollDirective,
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
  ],
  providers: [],

})
export class AppModule { }