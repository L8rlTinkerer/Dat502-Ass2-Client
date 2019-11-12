import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  isloggedIn():boolean {
    return this.authService.loginStatus;
  }

  logUserOut():boolean {
    return this.authService.logUserOut();
  }

}
