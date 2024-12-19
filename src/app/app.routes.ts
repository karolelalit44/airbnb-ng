import { Routes } from '@angular/router';
import { HostHomeComponent } from './shared/component/host-home/host-home.component';
import { PropertyCategoryComponent } from './pages/home/property-category/property-category.component';

export const routes: Routes = [
     { path: 'host-home', component: HostHomeComponent, title: 'Host-Home' },
     {
          path: "", loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
     },

];
