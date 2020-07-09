import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public router : Router
  ) { }

  ngOnInit(): void {    
  }

  // This is the method that will check if the user is logged in or not.
  loggedIn() {
    if (sessionStorage.getItem('authenticatedUser')) {
      return true;
    }
    return false;    
  }  // End of the 'loggedIn' method

}  // End of the 'MenuComponent' class
