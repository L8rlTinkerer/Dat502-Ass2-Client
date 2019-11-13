import { Component, OnInit } from '@angular/core';
import { RegisterOwnerModel } from '../register-owner.model';
import { AddressModel } from 'src/app/shared/address.model';
import { RegisterOwnerResponseModel } from '../register-owner-response.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {
  registrationModel = new RegisterOwnerModel();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterOwnerResponseModel();
  error: boolean = false;


  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }


    register(form: NgForm){
    this.registrationModel.isActive = 1;
    this.registrationModel.addressNoNavigation = this.addressModel;
    this.registrationModel.systemUserTypeNo = 5; // change this selection?

    let registerSubmission = JSON.stringify(JSON.stringify(this.registrationModel));
   
    this.authService.register(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/assistant-dashboard']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
    });
    
    
  }

}
