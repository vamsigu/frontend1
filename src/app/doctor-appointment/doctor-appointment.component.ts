import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppointmentService } from '../services/appointment.service';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit{

  constructor(private service:AppService,private appoint:AppointmentService,private doctor:DoctorloginService){}
  appointments:any
  doctorname:any
  doctors:any
  doctorappointments: any
  k:number
  ngOnInit(): void {
    this.doctor.getdoctors().subscribe(response=>{
      this.doctors = response
      for(let doctor1 of this.doctors){
        if(this.service.doctoremail == doctor1['email']){
          this.doctorname = doctor1['name']
        }
      }
      this.appoint.getdoctorappointment(this.doctorname).subscribe(response=>{
        this.doctorappointments = response
      })
    })
  }
}
