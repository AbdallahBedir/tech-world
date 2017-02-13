import { Injectable } from '@angular/core';

@Injectable()
export class PatientsService {
  patients:any[]=[
    {id:1,name:"Ali",Age:18,Department:"Surgery",disease:"Lorem Ipsum is simply dummy text"},
    {id:2,name:"Mostafa",Age:45,Department:"Anesthesia",disease:"Lorem Ipsum is simply dummy text"},
    {id:3,name:"Mohamed",Age:32,Department:"Dentistry",disease:"Lorem Ipsum is simply dummy text"},
    {id:4,name:"Abdallah",Age:26,Department:"Emergency Room",disease:"Lorem Ipsum is simply dummy text"}
  ];
  
  PatientsLocal:any= JSON.parse(localStorage.getItem("patients")) || this.patients;
  constructor() {
    if(!localStorage.getItem("patients")){
        localStorage.setItem("patients",JSON.stringify(this.patients));
    }
  }
  getLocalStorageNow(){
    return JSON.parse(localStorage.getItem("patients"));
  }
  submitChanges(patients){
    localStorage.removeItem("patients");
    localStorage.setItem("patients",JSON.stringify(patients));
    this.PatientsLocal=JSON.parse(localStorage.getItem("patients"));
  }
  AddPatient(patient){   
    const currentPatients:any[] = this.getLocalStorageNow();
    currentPatients.push(patient);
    this.submitChanges(currentPatients);
  }
  DeletePatient(id){
    const currentPatients:any[] = this.getLocalStorageNow();
    let DeletedItem = currentPatients.find(element => element.id==id);
    currentPatients.splice(currentPatients.indexOf(DeletedItem),1);
    this.submitChanges(currentPatients);
  }
  EditPatient(patient){

    const currentPatients:any[] = this.getLocalStorageNow();
    currentPatients.filter(ele => {
      if(ele.id == patient.id){
        ele.name= patient.PatientName;
        ele.Age= patient.Age;
        ele.Department= patient.Department;
        ele.disease= patient.Disease;
      }
    });
    this.submitChanges(currentPatients);
  }

}
