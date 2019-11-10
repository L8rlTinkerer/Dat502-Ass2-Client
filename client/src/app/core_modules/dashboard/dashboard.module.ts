import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ClientDashboardComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
