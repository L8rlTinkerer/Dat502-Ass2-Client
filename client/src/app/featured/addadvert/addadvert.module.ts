import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddadvertRoutingModule } from './addadvert-routing.module';
import { AddadvertComponent } from './addadvert/addadvert.component';


@NgModule({
  declarations: [AddadvertComponent],
  imports: [
    CommonModule,
    AddadvertRoutingModule
  ]
})
export class AddadvertModule { }
