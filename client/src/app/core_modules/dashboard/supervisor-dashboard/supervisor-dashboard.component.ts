import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  registerAssistant(){
    this.route.navigate(['/register-assistant']);
  }

}
