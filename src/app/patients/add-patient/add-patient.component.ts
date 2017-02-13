import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientsService} from '../../core/patients.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  PatientForm: FormGroup;
  PatientName: FormControl;
  Age: FormControl;
  Department:FormControl;
  Disease:FormControl;
  sucssed:boolean = true;
  
  constructor(builder:FormBuilder,private router:Router
        ,private _patientsService:PatientsService) { 

      this.PatientName= new FormControl('',[
        Validators.required      
      ]);
      this.Age= new FormControl('',[
        Validators.required
      ]);
      this.Department = new FormControl('',[]);
      this.Disease = new FormControl('',[]);

      this.PatientForm = builder.group({
          PatientName: this.PatientName,
          Age :this.Age,
          Department:this.Department,
          Disease:this.Disease
      });
   }

  ngOnInit() {

  }
  Add(patient){
    
      let length = this._patientsService.PatientsLocal.length;
      let LastIndex = this._patientsService.PatientsLocal[length-1].id;
      const NewPatient = {id:LastIndex+1,name:patient.PatientName,
            Age:patient.Age,Department:patient.Department,disease:patient.Disease};
      this._patientsService.AddPatient(NewPatient);
      this.router.navigate(['/Patients']);
  }
}
