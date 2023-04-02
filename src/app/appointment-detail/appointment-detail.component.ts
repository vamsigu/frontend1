import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit{

  appointment:any
  id:number
  constructor(private route:ActivatedRoute,private appoint:AppointmentService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id'];
      this.appoint.getappointment(this.id+1).subscribe(response=>{
        this.appointment=response
      })
    })
  }

  onedit(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
