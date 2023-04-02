import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {

  constructor(private router:Router){}

  onlogout(){
    this.router.navigate(['home'])
  }
}
