import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { DoctorloginService } from '../services/doctorlogin.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  doctorlogindata={
    name:"",
    password:""
  }

  constructor(private login:DoctorloginService, private router:Router,private service:AppService){}

  doctors : any

  ngOnInit(): void {
    this.login.getdoctors().subscribe(reponse=>{
      this.doctors = reponse
      console.log(this.doctors)
    })
  }
  onlogin(){
    for(let i = 1; i <= this.doctors.length; i++){
       this.login.doctorloginpage(i).subscribe(response=>{
        if ((this.doctorlogindata.name === response['email']) && 
          (this.doctorlogindata.password === response['password'])){
        this.router.navigate(['profile'])}
       }) 
     }
     this.service.doctoremail = this.doctorlogindata.name
  }

}
