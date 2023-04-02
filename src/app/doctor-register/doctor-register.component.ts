import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorregisterService } from '../services/doctorregister.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {

  doctordata={
    doc_id:0,
    name:"",
    email:"",
    specialization:'',
    number:"",
    imagepath:'',
    available:'',
    password:"", 
  }

  constructor(private register:DoctorregisterService,private route:Router){}

  createdoctor(){
    this.register.doctorregister(this.doctordata).subscribe(response=>{
      alert("Registered Sucessfully")
      this.route.navigate(['doctorlogin'])
    })
  }

  onIncrement(){
    this.doctordata.doc_id++
  }

}
