import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppService } from '../app.service';
import { AppointmentService } from '../services/appointment.service';
import { Doctor1 } from '../shared/doctor1.model';
import { LoginService } from '../services/login.service'
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  slots=['10:00','10:30','11:00','11:30','12:00']
  bookingform:FormGroup;
  id:number
  doctor:Doctor1
  patients:any
  appointmentdata={
    appoint_id:0,
    pname:"",
    age:"",
    address:"",
    dname:'',
    specialization:'',
    day:"",
    slot:"",
    pat_id:0
  }

  constructor(private router:Router,private service:AppService, private route:ActivatedRoute, private appoint:AppointmentService,private login:LoginService, private doc:DoctorloginService){}

  ngOnInit(){
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.doc.doctorloginpage(this.id+1).subscribe(response=>{
        this.appointmentdata.dname = response['name']
        this.appointmentdata.specialization = response['specialization']
        this.login.getpaitents().subscribe(response=>{
          this.patients = response
          console.log(this.service.patientemail)
          for(let patient of this.patients){
            if (this.service.patientemail == patient['email']){
              this.appointmentdata.pat_id = patient['pat_id']
            }
          }
        })
      })
    });
  }

  oncancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onpayment(){
    this.appoint.appointmentpage(this.appointmentdata).subscribe(response=>{
      this.service.appointments.push(response)
      this.router.navigate(['payment'])
    })
  }

  onIncrement(){
    this.appointmentdata.appoint_id++
  }

}
