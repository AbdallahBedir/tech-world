import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core/core.component';

const routes: Routes = [
  {path: '',redirectTo:"Home",pathMatch:"full"},
  {path: 'Home',component:CoreComponent},
  {path: 'Patients',loadChildren:"app/patients/patients.module#PatientsModule"},
  {path: 'Doctors',loadChildren:"app/doctors/doctors.module#DoctorsModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
