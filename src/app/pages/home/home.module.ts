import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PropertyCategoryComponent } from './property-category/property-category.component';


@NgModule({
  declarations: [
    PropertyCategoryComponent
  ],
  imports: [
    
    CommonModule,
    HomeRoutingModule,
    SharedModule,

  ]
})
export class HomeModule { }
