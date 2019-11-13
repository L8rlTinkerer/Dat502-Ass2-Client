import { Component, OnInit } from '@angular/core';
import { Addviewing } from '../addviewing.model';
import { AddviewingResponse } from '../addviewing-response.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddviewingService } from '../addviewing.service';

@Component({
  selector: 'addviewing',
  templateUrl: './addviewing.component.html',
  styleUrls: ['./addviewing.component.css']
})
export class AddviewingComponent implements OnInit {
  addViewingModel = new Addviewing();
  errorResponseModel = new AddviewingResponse();
  error: boolean = false;

  constructor(private route: Router, private addviewingService: AddviewingService) { }

  ngOnInit() {
  }


  addViewing(form: NgForm){
    let registerSubmission = JSON.stringify(JSON.stringify(this.addViewingModel));

    this.addviewingService.addViewing(registerSubmission).subscribe((result) => {
      if (result.success){
        this.route.navigate(['/assistant-dashboard']);
      }
    }, error => {
        this.error = true;
        this.errorResponseModel = error.error; 
        console.log(error.error);
    });   
  }

}
