import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAssistantComponent } from './register-assistant/register-assistant.component';


const routes: Routes = [
  {
    path:"register-assistant", component: RegisterAssistantComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAssistantRoutingModule { }
