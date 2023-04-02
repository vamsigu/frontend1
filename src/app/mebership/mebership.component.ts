import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoginService } from '../services/login.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-mebership',
  templateUrl: './mebership.component.html',
  styleUrls: ['./mebership.component.css']
})
export class MebershipComponent implements OnInit{
  members:any
  mode = false
  patients:any
  name:string
  email:string
  number:string
  address:string
  
  memberdata={
    member_id:0,
    pat_id:0
  }
  constructor( private router:Router,private member:MemberService,private login:LoginService, private service:AppService){}

  ngOnInit(): void {
    this.login.getpaitents().subscribe(response=>{
      this.patients = response
      for(let patient of this.patients){
        if (this.service.patientemail == patient['email']){
          this.memberdata.pat_id = patient['pat_id']
        }
      }
    })
    this.member.getmembers().subscribe(response=>{
      this.members = response
      for(let i of this.members){
        if(this.memberdata.pat_id==i['pat_id']){
          this.mode = true
          this.login.loginpage(i['pat_id']).subscribe(response=>{
            this.name=response['name'],
            this.email=response['email'],
            this.number=response['number'],
            this.address=response['address']  
          })
        }
      }
    })
  }

  onbuy(){
    this.member.createmember(this.memberdata).subscribe(response=>{
      alert("Purchased Sucessfully")
      this.memberdata.member_id++
    })
  }

}
