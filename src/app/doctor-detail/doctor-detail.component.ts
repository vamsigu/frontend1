import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';
import { DoctorloginService } from '../services/doctorlogin.service';
import { Doctor1 } from '../shared/doctor1.model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent  implements OnInit{
  constructor(private service:AppService, private route:ActivatedRoute, private router:Router, private doctor1:DoctorloginService){}

  doctor:any
  id: number

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      this.id = +params['id'];
      this.doctor1.doctorloginpage(this.id+1).subscribe(response=>{
        this.doctor = response
      })
    })
    
  }

  onbook(){
    this.router.navigate(['booking'], {relativeTo:this.route})
  }
}
