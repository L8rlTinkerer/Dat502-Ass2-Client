import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAssistantRoutingModule } from './register-assistant-routing.module';
import { RegisterAssistantComponent } from './register-assistant/register-assistant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterAssistantComponent],
  imports: [
    CommonModule,
    RegisterAssistantRoutingModule,
    FormsModule
  ]
})
export class RegisterAssistantModule { }
