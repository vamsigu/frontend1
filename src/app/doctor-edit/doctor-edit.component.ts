import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorloginService } from '../services/doctorlogin.service';
import { DoctorregisterService } from '../services/doctorregister.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit{
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
  editmode=false
  id:number;
  constructor(private route:ActivatedRoute,private doctor:DoctorloginService,private doc:DoctorregisterService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.doctor.doctorloginpage(this.id+1).subscribe(response=>{
        this.doctordata ={
          doc_id:response['doc_id'],
          name:response['name'],
          email:response['email'],
          specialization:response['specialization'],
          number:response['number'],
          imagepath:response['imagepath'],
          available:response['available'],
          password:response['password'], 
        }
      })
    })
  }

  updatedoctor(){
    if(this.editmode){
      this.doctor.updatedoctor((this.id+1),this.doctordata).subscribe(response=>{
        alert("Updated Sucessfully")
        this.router.navigate(['admin'])
      })
    }else{
      this.doc.doctorregister(this.doctordata).subscribe(response=>{
        alert("Created Sucessfully")
        this.router.navigate(['admin'])
      })
    }
  }
}
