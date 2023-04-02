import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  doctors:any
  constructor(private doc:DoctorloginService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.doc.getdoctors().subscribe(response=>{
      this.doctors = response
    })
  }

  create(){
    this.router.navigate(['new'],{relativeTo: this.route} )
  }

}
