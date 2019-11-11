import { Component, OnInit, Input } from '@angular/core';
import { ClientDashboardModel } from '../dashboard/Models/client-dashboard.model';

@Component({
  selector: 'client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  @Input() clientDashboard: ClientDashboardModel;

  constructor() { }

  ngOnInit() {
  }

}
