import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core_modules/home/home/home.component';

import { LoginComponent } from './core_modules/login/login/login.component';
import { RegisterClientComponent } from './core_modules/register-client/register-client/register-client.component';
import { DashboardComponent } from './core_modules/dashboard/dashboard/dashboard.component';
import { RegisterStaffComponent } from './core_modules/register-staff/register-staff/register-staff.component';



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
    path:"register-staff", component: RegisterStaffComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
