import { Component, Input } from '@angular/core';
import { Doctor1 } from 'src/app/shared/doctor1.model';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent {
  @Input() doctor:Doctor1
  @Input() index : number
}
