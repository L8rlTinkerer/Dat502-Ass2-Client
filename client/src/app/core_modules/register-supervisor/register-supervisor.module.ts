import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSupervisorRoutingModule } from './register-supervisor-routing.module';
import { RegisterSupervisorComponent } from './register-supervisor/register-supervisor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterSupervisorComponent],
  imports: [
    CommonModule,
    RegisterSupervisorRoutingModule,
    FormsModule
  ]
})
export class RegisterSupervisorModule { }
