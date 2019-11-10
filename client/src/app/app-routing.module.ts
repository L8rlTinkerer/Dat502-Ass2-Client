import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core_modules/home/home/home.component';

import { LoginComponent } from './core_modules/login/login/login.component';
import { RegisterClientComponent } from './core_modules/register-client/register-client/register-client.component';



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
    path:"register-client", component: RegisterClientComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
