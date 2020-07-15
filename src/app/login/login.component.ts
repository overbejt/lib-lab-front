import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

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
    private auth : HardCodedAuthService,
    private jwt : JwtAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  /**
   * This is the method that will perform authentication when a user logs in.
   */
  handleLogin() {
    // Attempt to login
    this.jwt.login(this.username, this.password).subscribe(
      data => {
        // Navigate to the book list page
        this.router.navigate(['list-book']);
        console.log('successful login');
      }, 
      error => {
        // Update the error message
        this.errorMsg = 'Invalid Login Credentials';
        // Toggle the validLogin boolean
        this.validLogin = false;
      }
    );
  }  // End of the 'handleLogin' method

}  // End of the 'LoginComponent' class
