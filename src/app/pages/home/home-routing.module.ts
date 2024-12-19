import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyCategoryComponent } from './property-category/property-category.component';

const routes: Routes = [

  
  { path: "", component: PropertyCategoryComponent, title: 'Home' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
