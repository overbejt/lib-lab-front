import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private jwt : JwtAuthenticationService
  ) { }

  ngOnInit(): void {
    // Have the jwt service log the user out
    this.jwt.logout();
  }

}  // End of the 'LogoutComponent' class
