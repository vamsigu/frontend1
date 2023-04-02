import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.css']
})
export class Header4Component {

  constructor(private router:Router){}

  onlogout(){
    this.router.navigate(['home'])
  }

}
