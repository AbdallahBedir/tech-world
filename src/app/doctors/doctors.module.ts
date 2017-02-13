import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';

@NgModule({
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ],
  declarations: [DoctorsComponent]
})
export class DoctorsModule { }
