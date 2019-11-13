import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddviewingComponent } from './addviewing/addviewing.component';


const routes: Routes = [
  {
    path:"addviewing", component: AddviewingComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddviewingRoutingModule { }
