import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // State variables
  username : string;
  password : string;
  validLogin = true;
  errorMsg = 'Invalid Login Credentials';

  constructor(
    private router : Router,
    private auth : HardCodedAuthService
  ) { }

  ngOnInit(): void {
  }

  /**
   * This is the method that will perform authentication when a user logs in.
   */
  handleLogin() {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(['list-book']);
      this.validLogin = true;
    } else {
      this.validLogin = false;
    }
  }  // End of the 'handleLogin' method

}  // End of the 'LoginComponent' class
