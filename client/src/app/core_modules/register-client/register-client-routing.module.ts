import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterClientComponent } from './register-client/register-client.component';


const routes: Routes = [
  {
    path:"register-client", component: RegisterClientComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClientRoutingModule { }
