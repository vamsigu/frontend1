import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppointmentService } from '../services/appointment.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{

    appointments:any
    patients:any
    id:number
    constructor(private service:AppService, private appoint:AppointmentService,private login:LoginService){}
  
    ngOnInit(): void {
      this.appoint.getappointments().subscribe(response=>{
        this.appointments = response
      })
    }
}

