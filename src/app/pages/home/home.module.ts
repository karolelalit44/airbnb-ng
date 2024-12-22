import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PropertyCategoryComponent } from './property-category/property-category.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HomeComponent } from './home.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { TruncatePipe } from '../../shared/pipes/truncate/truncate.pipe';
import { BottomNavBarComponent } from '../../shared/component/bottom-nav-bar/bottom-nav-bar.component';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SetRegionComponent } from '../../shared/modals/set-region/set-region.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SetRegionComponent,
    WishlistComponent,
    PropertyCategoryComponent,
    PropertyListComponent,
    TruncatePipe,
    BottomNavBarComponent,
  ],
  imports: [
    InfiniteScrollDirective,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    
]
})
export class HomeModule { }
