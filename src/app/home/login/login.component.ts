import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata={
    name:"",
    password:""
  }
  found: boolean = false;
  @ViewChild('f') loginform : NgForm
  constructor(private router:Router, private service:AppService,private login:LoginService){}
  paitents : any
  mode= true

  ngOnInit(): void {
    this.login.getpaitents().subscribe(reponse=>{
      this.paitents = reponse
    })
    
  }
  onlogin(){
    for(let i = 1; i <= this.paitents.length; i++){
       this.login.loginpage(i).subscribe(response=>{
        if ((this.logindata.name == response['email']) && 
          (this.logindata.password == response['password'])){
        this.router.navigate(['membership'])
        this.service.patientemail=this.logindata.name}
       })
    }
    this.login.getpatientemail(this.logindata.name).subscribe(response=>{
      console.log(response)
    },
    error=>{
      if(error!=null){
        alert("Invalid Username")
      }
    })
    this.login.getpatientpassword(this.logindata.password).subscribe(response=>{
      console.log(response)
    },
    error=>{
      if(error!=null){
        alert("Invalid password")
      }
    })
  }
}
