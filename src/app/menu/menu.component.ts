import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public router : Router,
    private jwt : JwtAuthenticationService
  ) { }

  ngOnInit(): void {    
  }

  // This is the method that will check if the user is logged in or not.
  loggedIn() {
    return this.jwt.isLoggedIn(); 
  }  // End of the 'loggedIn' method

}  // End of the 'MenuComponent' class
