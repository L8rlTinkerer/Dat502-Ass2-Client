import { Component, OnInit } from '@angular/core';
import { RegisterStaffModel } from '../register-staff.model';
import { AddressModel } from 'src/app/shared/address.model';
import { RegisterStaffResponseModel } from '../register-staff-response.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  registrationModel = new RegisterStaffModel();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterStaffResponseModel();
  error: boolean = false;


  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }


    register(form: NgForm){
    
    this.registrationModel.AddressNoNavigation = this.addressModel;
    this.registrationModel.SystemUserTypeNo = 1; // change this selection?
    let registerSubmission = JSON.stringify(JSON.stringify(this.registrationModel));
    

   
    this.authService.register(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/home']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
    });
    
    
  }

}
