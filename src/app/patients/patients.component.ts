import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../core/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients:any[];
  constructor(private _patientsService:PatientsService) {
    this.patients = this._patientsService.PatientsLocal;
  }

  ngOnInit() {
    
  }
   deletePatient(id){
      this._patientsService.DeletePatient(id);
      this.patients = this._patientsService.PatientsLocal;
  }

}
