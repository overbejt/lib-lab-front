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
      return true;
    } 
    return false;
  }  // End of the 'authenticate' method
}  // End of the 'HardCodedAuthService' class
