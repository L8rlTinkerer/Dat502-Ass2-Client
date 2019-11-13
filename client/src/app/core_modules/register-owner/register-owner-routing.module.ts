import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';


const routes: Routes = [
  {
    path:"register-owner", component: RegisterOwnerComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterOwnerRoutingModule { }
