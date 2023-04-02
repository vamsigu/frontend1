import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent {

  @Input() doctor:any
  @Input() index : number

}
