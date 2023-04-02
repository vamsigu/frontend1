import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent {

  appointments =[]
  i:number
  constructor(private service:AppService){}

  ngOnInit(): void {
    this.i = this.service.appointments.length
    this.appointments.push(this.service.appointments[this.i - 1]) 
  }


  onprint(){
    alert("Downloaded Sucessfully")
  }
}
