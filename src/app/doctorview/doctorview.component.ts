import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DoctorloginService } from '../services/doctorlogin.service';
@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrls: ['./doctorview.component.css']
})
export class DoctorviewComponent implements OnInit{

  constructor(private service:AppService,private doc:DoctorloginService){}
  doctor:any
  doctors:any
  ngOnInit(): void {
    this.doc.getdoctors().subscribe(response=>{
      this.doctors = response
      for(let doctor1 of this.doctors){
        if(this.service.doctoremail == doctor1['email']){
          this.doctor = doctor1
        }
      }
    })
  }
}


