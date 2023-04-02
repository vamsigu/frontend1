import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { DoctorloginService } from '../services/doctorlogin.service';
import { Doctor } from '../shared/doctor.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  doctors:any
  constructor(private router:Router, private service:AppService,private doctor:DoctorloginService){}

  ngOnInit(): void {
    this.doctor.getdoctors().subscribe(response=>{
      this.doctors = response
    })
  }

}
