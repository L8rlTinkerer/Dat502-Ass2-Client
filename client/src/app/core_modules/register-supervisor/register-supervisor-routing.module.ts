import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSupervisorComponent } from './register-supervisor/register-supervisor.component';


const routes: Routes = [
  {
    path:"register-supervisor", component: RegisterSupervisorComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSupervisorRoutingModule { }
