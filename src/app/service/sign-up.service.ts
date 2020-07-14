import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  /**
   * This is the method that will sign a user up.  It will send a POST calll 
   * to the API.  When the POST is successful, the token returned will be 
   * stored in the session storage using the key of 'TOKEN'.  Then it will 
   * return true.  When it is not successful, the method will return false.
   * 
   * @param username The username supplied by the user on the signup page.
   * @param password The password supplied by the user on the signup page.
   */
  signup(username, password) : boolean {
    // Send the post request to API_URL/users/signup
    // When successful, put the token in the session storae using key of 'TOKEN'
    // Otherwise, return false
    // When successful, return true
    return true;
  }  // End of the 'signup' mehtod

}  // End of the 'SignUpService' classs
