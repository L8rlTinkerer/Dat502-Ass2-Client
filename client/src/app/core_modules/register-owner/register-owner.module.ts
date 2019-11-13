import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterOwnerRoutingModule } from './register-owner-routing.module';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterOwnerComponent],
  imports: [
    CommonModule,
    RegisterOwnerRoutingModule,
    FormsModule
  ]
})
export class RegisterOwnerModule { }
