import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AssistantDashboardComponent } from './assistant-dashboard/assistant-dashboard.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';


const routes: Routes = [
  {
    path:"manager-dashboard", component: ManagerDashboardComponent 
  },
  {
    path:"assistant-dashboard", component: AssistantDashboardComponent 
  },
  {
    path:"client-dashboard", component: ClientDashboardComponent 
  },
  {
    path:"owner-dashboard", component: OwnerDashboardComponent 
  },
  {
    path:"supervisor-dashboard", component: SupervisorDashboardComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
