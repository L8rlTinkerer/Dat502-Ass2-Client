import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core_modules/home/home/home.component';

import { LoginComponent } from './core_modules/login/login/login.component';
import { DashboardComponent } from './core_modules/dashboard/dashboard/dashboard.component';
import { PropertyComponent } from './featured/property/property/property.component';




const routes: Routes = [
  { 
    path: '', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  },
  {
    path:"property", component: PropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
