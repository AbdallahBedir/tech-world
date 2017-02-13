import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PatientsComponent, AddPatientComponent, EditPatientComponent]
})
export class PatientsModule { }
