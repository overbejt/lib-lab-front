import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  errorMsg : string;
  loading = false;

  constructor(
    private router : Router,
    private jwt : JwtAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  /**
   * This is the method that will validate the username entered by the user.
   * 
   * @returns True when the username is not empty.  Otherwise, false.
   */
  validUsername() : boolean {
    if (this.username != null && this.username.length < 1) {
      this.errorMsg = 'Invalid Username';
      return false;
    }
    return true;
  }  // End of the 'validUsername' method

  /**
   * This is the method that will validate the password entered by the user.
   * 
   * @returns True when the password is not empty.  Otherwise, false.
   */
  validPassword() : boolean {
    if (this.password != null && this.password.length < 1) {
      this.errorMsg = 'Invalid Password';
      return false;
    }
    return true;
  }  // End of the 'validPassword' method
  
  /**
   * This is the method that will perform authentication when a user logs in.
   */
  handleLogin() {
    // Make sure both fields are filled in
    if (this.validUsername() && this.validPassword()) {
      // Toggle the loading boolean
      this.loading = true;
      // Attempt to login
      this.jwt.login(this.username, this.password).subscribe(
        data => {
          // Navigate to the book list page
          this.router.navigate(['list-book']);
          console.log('successful login');
        }, 
        error => {
          console.log('login FAILED');
          console.log(error);
          // Update the error message
          this.errorMsg = 'Invalid Login Credentials';
        }
      );
    }
  }  // End of the 'handleLogin' method
}  // End of the 'LoginComponent' class
