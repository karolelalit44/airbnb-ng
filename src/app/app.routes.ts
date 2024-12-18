import { Routes } from '@angular/router';
import { PropertyCategoryComponent } from './pages/property-category/property-category.component';
import { HostHomeComponent } from './shared/component/host-home/host-home.component';

export const routes: Routes = [
     { path: 'host-home', component: HostHomeComponent, title: 'Host-Home' },
     { path: '', component: PropertyCategoryComponent, title: 'Home' },
];
