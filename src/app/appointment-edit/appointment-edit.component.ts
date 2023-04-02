import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';
import { AppointmentService } from '../services/appointment.service';


@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit{
  updatedata={
    appoint_id:0,
    pname:"",
    age:0,
    address:"",
    dname:'',
    specialization:'',
    day:'',
    slot:'',
    pat_id:0
  }
  available:any
  id:number;
  slots=['10:00','10:30','11:00','11:30','12:00']

  constructor(private route:ActivatedRoute,private service:AppService,private appoint:AppointmentService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.appoint.getappointment(this.id+1).subscribe(response=>{
        this.updatedata={
          appoint_id:response['appoint_id'],
          pname:response['pname'],
          age:response['age'],
          address:response['address'],
          dname:response['dname'],
          specialization:response['specialization'],
          day:response['day'],
          slot:response['slot'],
          pat_id:response['pat_id']
        }
        for(let i=0;i<this.service.doctors1.length;i++){
          if(this.updatedata.dname == this.service.doctors1[i]['name']){
            this.available = this.service.doctors1[i]['available']
          }
        }
      })
    })
    
  }

  

  update(){
    this.appoint.updateappointment((this.id+1),this.updatedata).subscribe(response=>{
      alert("Updated Sucessfully")
      this.router.navigate(['appointment'])
    })
  }
}
