import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssistantDashboardComponent } from './assistant-dashboard/assistant-dashboard.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';


@NgModule({
  declarations: [
    ClientDashboardComponent, 
    DashboardComponent, 
    AssistantDashboardComponent, 
    SupervisorDashboardComponent, 
    ManagerDashboardComponent, 
    OwnerDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
