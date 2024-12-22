import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  
  { path: "", component: HomeComponent, title: 'Home - Airbnb' },
  { path: "wishlists", component:WishlistComponent, title : 'Wishlists - Airbnb'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
