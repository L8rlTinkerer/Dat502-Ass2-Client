import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClientModel } from '../register-client.model';

import { RegisterClientResponseModel } from '../register-client-response.model';
import { Register2Model } from '../register2.model';
import { AddressModel } from 'src/app/shared/address.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  registrationModel = new Register2Model();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterClientResponseModel();
  error: boolean = false;

  

  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }



  register(form: NgForm){
    
    this.registrationModel.AddressNoNavigation = this.addressModel;
    this.registrationModel.IsActive = 1;
    this.registrationModel.SystemUserTypeNo = 4;
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
