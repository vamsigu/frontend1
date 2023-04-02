import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  appointments =[]
  i:number
  constructor(private service:AppService,private router:Router){}

  ngOnInit(): void {
    this.i = this.service.appointments.length
    this.appointments.push(this.service.appointments[this.i - 1]) 
  }

  onpay(){
    this.router.navigate(['booked'])
  }

  oncancel(){
    this.router.navigate(['doctor'])
  }

  

}
