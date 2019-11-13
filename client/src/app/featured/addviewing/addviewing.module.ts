import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddviewingRoutingModule } from './addviewing-routing.module';
import { AddviewingComponent } from './addviewing/addviewing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddviewingComponent],
  imports: [
    CommonModule,
    AddviewingRoutingModule,
    FormsModule
  ]
})
export class AddviewingModule { }
