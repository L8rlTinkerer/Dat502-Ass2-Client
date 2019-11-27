import { Component, OnInit } from '@angular/core';
import { CreateClientBranchRegoModel } from './CreateClientBranchRegoModel.model';
import { CreateClientBranchRegoResponseModel } from './CreateClientBranchRegoResponseModel.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DashBoardService } from 'src/app/shared/dashboard.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'assistant-dashboard',
  templateUrl: './assistant-dashboard.component.html',
  styleUrls: ['./assistant-dashboard.component.css']
})
export class AssistantDashboardComponent implements OnInit {
  registrationModel = new CreateClientBranchRegoModel();
  errorResponseModel = new CreateClientBranchRegoResponseModel();
  error: boolean = false;

  


  constructor(private dashboardService: DashBoardService, private route: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  registerClientWithBranch(form: NgForm){
    this.registrationModel.systemUserNo = Number(this.authService.getUserId());
    console.log("staff userid: ",this.registrationModel.userName);
    let registerSubmission = JSON.stringify(JSON.stringify(this.registrationModel));
    
    this.dashboardService.registerClientWithBranch(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/assistant-dashboard']);
      }
    }, error => {
        this.error = true;
        console.log(error.error);
        this.errorResponseModel = error.error; 
    });
       
  }

  registerOwner(){
    this.route.navigate(['/register-owner']);
  }

  CancelRegisterOwner(){
    this.route.navigate(['/register-owner']);
  }


  addViewing(form: NgForm){
    this.route.navigate(['/addviewing']);
  }

}
