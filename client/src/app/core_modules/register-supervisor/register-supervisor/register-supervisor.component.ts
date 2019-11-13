import { Component, OnInit } from '@angular/core';
import { RegisterSupervisorModel } from '../register-supervisor.model';
import { AddressModel } from 'src/app/shared/address.model';
import { RegisterSupervisorResponseModel } from '../register-supervisor-response.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register-supervisor',
  templateUrl: './register-supervisor.component.html',
  styleUrls: ['./register-supervisor.component.css']
})
export class RegisterSupervisorComponent implements OnInit {
  registrationModel = new RegisterSupervisorModel();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterSupervisorResponseModel();
  error: boolean = false;


  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }


    register(form: NgForm){
    
    this.registrationModel.AddressNoNavigation = this.addressModel;
    this.registrationModel.SystemUserTypeNo = 1;
    let registerSubmission = JSON.stringify(JSON.stringify(this.registrationModel));
    

   
    this.authService.register(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/manager-dashboard']); 
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
    });
    
    
  }

}
