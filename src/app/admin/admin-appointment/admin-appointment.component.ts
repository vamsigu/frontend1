import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.css']
})
export class AdminAppointmentComponent implements OnInit{

  appointments:any
  constructor(private appoint:AppointmentService){}

  ngOnInit(): void {
    this.appoint.getappointments().subscribe(response=>{
      this.appointments = response
    })
  }
}
