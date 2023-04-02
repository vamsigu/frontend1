import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{

  constructor(private service:AppService,private doctor:DoctorloginService){}

  doctors:any

  ngOnInit(): void {
    this.doctor.getdoctors().subscribe(response=>{
      this.doctors = response
    })
  }

}
