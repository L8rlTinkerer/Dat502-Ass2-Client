import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStaffRoutingModule } from './register-staff-routing.module';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterStaffComponent],
  imports: [
    CommonModule,
    RegisterStaffRoutingModule,
    FormsModule
  ]
})
export class RegisterStaffModule { }
