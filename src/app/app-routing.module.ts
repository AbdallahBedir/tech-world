import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core/core.component';
import {LoginComponent} from './core/login/login.component';
import {LoggedInGuard} from './core/LoggedInGuard';
import {NotAllowedComponent} from './core/not-allowed/not-allowed.component';

const routes: Routes = [
  {path: '',redirectTo:"Home",pathMatch:"full"},
  {path: 'Home',component:CoreComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Patients',
      loadChildren:"app/patients/patients.module#PatientsModule",
    canActivate:[LoggedInGuard]},
  {path: 'Doctors',loadChildren:"app/doctors/doctors.module#DoctorsModule",
  canActivate:[LoggedInGuard]},
  {path: 'NotAuthorized',component:NotAllowedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
