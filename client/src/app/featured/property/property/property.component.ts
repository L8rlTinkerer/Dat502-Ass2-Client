import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../branch/branch.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { PropertyTypes } from '../models/propertytypes.model';
import { GetAllBranches } from '../../branch/models/get-all-branches.model';

import { AddressModel } from 'src/app/shared/address.model';
import { AddPropertyResponse } from '../models/addproperty-response.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProperty } from '../models/addproperty.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  //clientDashboard: ClientDashboardModel = new ClientDashboardModel();
  availablePropertyTypes: PropertyTypes[];
  availableBranches: GetAllBranches[];
  selectedBranch: number;
  selectedPropertyType: number;

  addPropertyModel = new AddProperty();
  addressModel = new AddressModel();
  errorResponseModel = new AddPropertyResponse();
  error: boolean = false;

  constructor(private branchService: BranchService,
              private propertyService: PropertyService, 
              private authService: AuthenticationService, 
              private route: Router) { }



  ngOnInit() {
    this.loadAddProperty();
  }

  addProperty(form: NgForm){
    this.addPropertyModel.AddressNoNavigation = this.addressModel;
    this.addPropertyModel.IsPropertyActive = 1;
    this.addPropertyModel.BranchNo = this.selectedBranch;
    console.log("selectedBranch: " + this.selectedBranch);
    this.addPropertyModel.PropertyTypeNo = this.selectedPropertyType;

    let registerSubmission = JSON.stringify(JSON.stringify(this.addPropertyModel));

    console.log("registerSubmission: " + registerSubmission);

    this.propertyService.addProperty(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/assistant-dashboard']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
        console.log(error.error);
    });
  }

  loadAddProperty(){
    //Get branches for display in dropdown menu:
    this.getAllBranches();

    this.selectedBranch = 0;

    // Set StaffNo for readonly display:
    this.addPropertyModel.StaffNo = Number(this.authService.getUserId());

    // Get Property Types for display in dropdown menu:
    this.getPropertyTypes();
    console.log("availablePropertyTypes: " + this.availablePropertyTypes)
    // BranchNo: number;
    // StaffNo: number;
    // PropertyTypeNo: number;
    // NumberOfRooms: number;
    // MonthlyRent: number;
    // IsPropertyActive: boolean;
    // AddressNoNavigation: AddressModel;
  }



  getAllBranches(){
    this.branchService.getAllBranches()
    .subscribe(res => {
    this.availableBranches = res;
    console.log("Branches returned");
    });
  }

  getPropertyTypes(){
    this.propertyService.getPropertyTypes()
    .subscribe(res => {
      this.availablePropertyTypes = res;
      console.log("PropertyTypes returned");
    });
  }

  
}
