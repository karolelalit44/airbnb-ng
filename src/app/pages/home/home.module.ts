import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PropertyCategoryComponent } from './property-category/property-category.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HomeComponent } from './home.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { TruncatePipe } from '../../truncate/truncate.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    PropertyCategoryComponent,
    PropertyListComponent,
    TruncatePipe
  ],
  imports: [
    
    InfiniteScrollDirective ,
    CommonModule,
    HomeRoutingModule,
    SharedModule,

  ]
})
export class HomeModule { }
