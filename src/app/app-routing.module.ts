import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostHomeComponent } from './shared/component/host-home/host-home.component';

const routes: Routes = [
  { path: 'host-home', component: HostHomeComponent, title: 'Host-Homes' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// not working