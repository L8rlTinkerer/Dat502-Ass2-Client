import { Component, OnInit } from '@angular/core';
import { RegisterAssistantModel } from '../register-assistant.model';
import { AddressModel } from 'src/app/shared/address.model';
import { RegisterAssistantResponseModel } from '../register-assistant-response.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register-assistant',
  templateUrl: './register-assistant.component.html',
  styleUrls: ['./register-assistant.component.css']
})
export class RegisterAssistantComponent implements OnInit {
  registrationModel = new RegisterAssistantModel();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterAssistantResponseModel();
  error: boolean = false;


  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }


    register(form: NgForm){
    
    this.registrationModel.addressNoNavigation = this.addressModel;
    this.registrationModel.SystemUserTypeNo = 1;
    let registerSubmission = JSON.stringify(JSON.stringify(this.registrationModel));
    

   
    this.authService.register(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/supervisor-dashboard']); //change this to supervisor-dashboard
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
        console.log(error.error);
    });
    
    
  }

}
