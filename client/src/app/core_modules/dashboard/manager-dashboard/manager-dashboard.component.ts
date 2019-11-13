import { Component, OnInit } from '@angular/core';
import { CreateBranchResponseModel } from '../dashboard/Models/CreateBranchResponseModel.model';
import { AddressModel } from 'src/app/shared/address.model';
import { CreateBranchModel } from '../dashboard/Models/CreateBranchModel.model';
import { DashBoardService } from 'src/app/shared/dashboard.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  createBranchModel = new CreateBranchModel(); 
  addressModel = new AddressModel();
  errorResponseModel = new CreateBranchResponseModel();
  error: boolean = false;

  constructor(private dashBoardService: DashBoardService, private route: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  createBranch(form: NgForm){
    this.createBranchModel.systemUserNo = Number(this.authService.getUserId());
    this.createBranchModel.AddressNoNavigation = this.addressModel;

    let registerSubmission = JSON.stringify(JSON.stringify(this.createBranchModel));

    this.dashBoardService.createNewBranch(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/manager-dashboard']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
        console.log(error.error);
    });
  }

}
