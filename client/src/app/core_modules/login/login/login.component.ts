import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    let userLogin = JSON.stringify(form.value);

    this.authService.login(userLogin).subscribe((result) => {
      if (result.success){
        console.log("success");
        this.route.navigate(['/home']);
      }
    }, error => {
        console.log(error.error);
    });

  }

}
