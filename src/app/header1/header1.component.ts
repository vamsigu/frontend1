import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoginService } from '../services/login.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit{
  members:any
  patients:any
  pat_id:any
  mode = false
  constructor(private router: Router,private login:LoginService,private service:AppService,private member:MemberService){}

  ngOnInit(): void {
    this.login.getpaitents().subscribe(response=>{
      this.patients = response
      console.log(this.service.patientemail)
      for(let patient of this.patients){
        if (this.service.patientemail == patient['email']){
          this.pat_id = patient['pat_id']
        }
      }
    })
    this.member.getmembers().subscribe(response=>{
      this.members = response
      for(let i of this.members){
        if(this.pat_id==i['pat_id']){
          this.mode = true
        }
      }
    })
    
  }

  onlogout(){
    this.router.navigate(['home'])
  }

}
