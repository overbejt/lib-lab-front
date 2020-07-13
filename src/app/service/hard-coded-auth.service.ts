import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {


  constructor() { }

  /**
   * This is a simple method that will validate user login.  It is temporary, 
   * Hard coded only.
   * 
   * @param user The username
   * @param password The password
   */
  authenticate(username, password) {
    if (username === 'josh' && password === 'password') {
      // Store a var in the browser
      sessionStorage.setItem('authenticatedUser', username);
      // Get a token
      // Store the token
      sessionStorage.setItem('token', 'Temporary Token');
      return true;
    } 
    return false;
  }  // End of the 'authenticate' method

  /**
   * This is a method that will check if a user is logged in.  
   * 
   * @returns True when the user is logged in, false when the user is not.
   */
  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }  // End of the 'isLoggedIn' method

}  // End of the 'HardCodedAuthService' class
