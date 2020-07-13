import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // State variables
  errorMsg = 'Invalid Sign up credentials';
  usernameInUse : boolean;
  validSignup = true;
  username : string;
  password : string;

  constructor(
    // Signup service shouldgo here
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * This is the method that will make sure that a username is entered.
   * The backend should verify that the username is not already in use.
   * 
   * @returns True when the username is not empty.  Otherwise returns false.
   */
  validUsername () : boolean {
    if (this.username != null) {
      return true;
    }
    return false;
  }  // End of the 'validUsername' method

  /**
   * This is the method that will make sure that a password is entered.  
   * 
   * @returns True when the password iis not empty.  Otherwise returns false.
   */
  validPassword() : boolean {
    if (this.password != null) {
      return true;
    }
    return false;
  }  // End of the 'validPassword' method

  /**
   * This is the method that will be invoked when the user tries to submit 
   * their credentials.
   */
  handleSignup() : void {
    // if (this.auth.authenticate(this.username, this.password)) {
    if (this.validUsername() && this.validPassword()) {
      // When both are valid, redirect to the login page
      this.router.navigate(['login']);
      this.validSignup = true;
    } else {
      this.validSignup = false;
    }
  }  // End of the 'handleSignup' method

}  // End of the 'SignupComponent' class
