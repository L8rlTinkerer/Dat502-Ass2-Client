import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { AddbranchComponent } from './addbranch/addbranch.component';


@NgModule({
  declarations: [AddbranchComponent],
  imports: [
    CommonModule,
    BranchRoutingModule
  ]
})
export class BranchModule { }
