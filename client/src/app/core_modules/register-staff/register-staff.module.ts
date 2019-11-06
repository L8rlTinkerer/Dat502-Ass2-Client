import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStaffRoutingModule } from './register-staff-routing.module';
import { RegisterStaffComponent } from './register-staff/register-staff.component';


@NgModule({
  declarations: [RegisterStaffComponent],
  imports: [
    CommonModule,
    RegisterStaffRoutingModule
  ]
})
export class RegisterStaffModule { }
