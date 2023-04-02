import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { AppService } from 'src/app/app.service';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:HttpClient, private route:Router, private register:RegisterService){}
  data={
    pat_id:0,
    name:"",
    email:"",
    number:"",
    address:"",
    password:"", 
  }
  createpatient(){
    this.register.registerpage(this.data).subscribe(response=>{
      alert("Registered Sucessfully")
      this.route.navigate(['login'])
    })
  }

  onIncrement(){
    this.data.pat_id++
  }

}
