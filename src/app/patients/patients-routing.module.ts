import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsComponent} from './patients.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {EditPatientComponent} from './edit-patient/edit-patient.component';

const routes: Routes = [
  {path:"",component:PatientsComponent,pathMatch:"full"},
  {path:"AddPatient",component:AddPatientComponent},
  {path:"EditPatient/:id",component:EditPatientComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PatientsRoutingModule { }
