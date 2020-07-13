import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Remove the 'authenticated' user from the session
    sessionStorage.removeItem('authenticatedUser');
    // Remove the 'token' from the session
    sessionStorage.removeItem('token'); 
  }

}  // End of the 'LogoutComponent' class
