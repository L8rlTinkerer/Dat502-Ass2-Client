import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClientModel } from '../register-client.model';
import { AddressModel } from '../address.model';
import { RegisterClientResponseModel } from '../register-client-response.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  registrationModel = new RegisterClientModel();
  addressModel = new AddressModel();
  errorResponseModel = new RegisterClientResponseModel();
  error: boolean = false;

  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }



  register(form: NgForm){
    
    this.registrationModel.addressNoNavigation = this.addressModel;
    let registerSubmission = this.registrationModel;

    
    //let userRegister = JSON.stringify(form.value);

    this.authService.register(registerSubmission).subscribe((result) => {
      if (result.success){
        console.log("success");
        this.route.navigate(['/home']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
        
      console.log(this.errorResponseModel["AddressNoNavigation.PostCode"][0])
    });
    
    
  }

}
