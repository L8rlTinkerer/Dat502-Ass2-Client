import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddviewingRoutingModule } from './addviewing-routing.module';
import { AddviewingComponent } from './addviewing/addviewing.component';


@NgModule({
  declarations: [AddviewingComponent],
  imports: [
    CommonModule,
    AddviewingRoutingModule
  ]
})
export class AddviewingModule { }
