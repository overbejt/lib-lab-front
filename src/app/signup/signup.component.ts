import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // State variables
  errorMsg : string;
  usernameInUse : boolean;
  username : string;
  password : string;
  loading = false;

  constructor(
    private signupService : SignUpService,
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
    if (this.username != null && this.username.length > 5) {
      return true;
    }
    this.errorMsg = 'Invalid Username';
    return false;
  }  // End of the 'validUsername' method

  /**
   * This is the method that will make sure that a password is entered.  
   * 
   * @returns True when the password iis not empty.  Otherwise returns false.
   */
  validPassword() : boolean {
    if (this.password != null && this.password.length > 5) {
      return true;
    }
    this.errorMsg = 'Invalid Password';
    return false;
  }  // End of the 'validPassword' method

  /**
   * This is the method that will be invoked when the user tries to submit 
   * their sign up credentials.
   */
  handleSignup() : void {
    // Make sure that the username and password are not empty    
    if (this.validUsername() && this.validPassword()) {
      // Toggle the loading boolean
      this.loading = true;
      // Send the credentials to the back-end
      let execSignup = this.signupService.signup(this.username, this.password) 
      execSignup.subscribe(
        data => {
          // When the user has successfully been signed up, 
          // redirect to the login page.
          this.router.navigate(['login']);        
          console.log('Successful signup');
        }, 
        error => {
          // Change the error message 
          this.errorMsg = 'Username is already in use';
          this.loading = false;
        }
      );
    }
  }  // End of the 'handleSignup' method
}  // End of the 'SignupComponent' class
