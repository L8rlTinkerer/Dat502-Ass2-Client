import { Component, OnInit } from '@angular/core';
import { DashBoardService } from 'src/app/shared/dashboard.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ClientDashboardModel } from './Models/client-dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientDashboard: ClientDashboardModel = new ClientDashboardModel();

  dashboardType: string;
  dashboardTypeClient: string;
  dashboardTypeAssistant: string;
  dashboardTypeSupervisor: string;
  dashboardTypeManager: string;
  dashboardTypeOwner: string;
  //<client-dashboard *ngIf="clientDashboard?.length > 0" [clientDashboard]="clientDashboard"></client-dashboard>

  constructor(private dashBoardService: DashBoardService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.setType();
    this.loadRequiredDashboard();
  }

  setType(){
    this.dashboardType = this.authService.getUserType();
  }

  loadRequiredDashboard(){
    switch(this.dashboardType){
      case "1": 
        this.dashboardTypeAssistant = this.dashboardType;
        this.loadAssistantDashboard();
        break;
      case "2": 
        this.dashboardTypeSupervisor = this.dashboardType;
        this.loadSupervisorDashboard();
        break;
      case "3": 
        this.dashboardTypeManager = this.dashboardType;
        this.loadManagerDashboard();
        break;
      case "4": 
        this.dashboardTypeClient = this.dashboardType;
        this.loadClientDashboard();
        break;
      case "5": 
        this.dashboardTypeOwner = this.dashboardType;
        this.loadOwnerDashboard(); 
        break;
    }
  }

 

  loadClientDashboard() {
    //Get dashboard stuff:
    this.dashBoardService.GetClientDashBoard(this.authService.getUserId())
    .subscribe(res => {
      this.clientDashboard = res;
      console.log("client loaded");
    })
  }

  loadAssistantDashboard() {
    console.log("assistant loaded");
  }

  loadSupervisorDashboard() {
    console.log("supervisor loaded");
  }

  loadManagerDashboard() {
    console.log("manager loaded");
  }

  loadOwnerDashboard() {
    console.log("owner loaded");
  }


}
