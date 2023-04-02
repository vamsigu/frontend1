import { Component,Input } from '@angular/core';
import { Doctor } from '../shared/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
 @Input() doctor:Doctor;
}
