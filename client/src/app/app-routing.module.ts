import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core_modules/home/home/home.component';
import { DashboardComponent } from './core_modules/dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"home", component: HomeComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  },
  { 
    path: '', redirectTo:'/home', pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
