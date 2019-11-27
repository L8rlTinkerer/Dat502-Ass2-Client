import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property/property.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule
  ],
  exports:[
    PropertyComponent
  ]
})
export class PropertyModule { }
