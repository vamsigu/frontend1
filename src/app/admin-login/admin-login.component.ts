import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  logindata={
    name:'',
    password:''
  }

  admins:any

  constructor(private router:Router,private admin:AdminService){}

  ngOnInit(): void {
    this.admin.getadmins().subscribe(response=>{
      this.admins = response
    })
  }

  onlogin(){
      for(let i=0;i<this.admins.length;i++){
        if((this.logindata.name == this.admins[i]['email']) && 
           (this.logindata.password == this.admins[i]['password'])){
          this.router.navigate(['admin'])
        }
      }
      this.admin.getadminemail(this.logindata.name).subscribe(reponse=>{
        console.log(reponse)
      },
      error=>{
        if(error!=null){
          alert("Invalid Username")
        }
      })
      this.admin.getadminpassword(this.logindata.password).subscribe(response=>{
        console.log(response)
      },
      error=>{
        if(error!=null){
          alert("Invalid password")
        }
      })
  }

}
