import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {PatientsService} from '../../core/patients.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  id: number;
  private sub: any;
  patient:any;

  PatientForm: FormGroup;
  PatientName: FormControl;
  Age: FormControl;
  Department:FormControl;
  Disease:FormControl;
  //sucssed:boolean = true;

  constructor(builder:FormBuilder,private router:Router
  ,private _patientsService:PatientsService,private route: ActivatedRoute) 
  {
      this.PatientName= new FormControl('',[
        Validators.required      
      ]);
      this.Age = new FormControl('',[
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

      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; // (+) converts string 'id' to a number
      });
      this._patientsService.PatientsLocal.filter(element =>{
          if(element.id == this.id){
              this.patient=element;
          }
      });      
  }
  submit(patient){

      const newPatient =Object.assign({id:this.id},patient);
      //console.log("the submitted patient is", newPatient);
      this._patientsService.EditPatient(newPatient);
      this.router.navigate(['Patients']);      
  }

}
