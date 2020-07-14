import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http : HttpClient
  ) { }

  /**
   * This is the method that will sign a user up.  It will send a POST calll 
   * to the API.  When the POST is successful, it will return true.  When it 
   * is not successful, the method will return false.
   * 
   * @param username The username supplied by the user on the signup page.
   * @param password The password supplied by the user on the signup page.
   * !@returns True when the post was successful.  Otherwise, false.
   */
  signup(username, password) : boolean {
    // Send the post request to API_URL/users/signup    
    // When successful, return true
    // Otherwise, return false
    console.log('Signup service called');
    let success = false;
    this.http.post(
      `${API_URL}/users/sign-up`,
      {
        'username' : username,
        'password' : password
      }
    ).subscribe(
      data => { 
        success = true; 
        console.log(data);
      },
      error => { 
        success = false; 
        console.log(error);
      }
    );
    return success;
  }  // End of the 'signup' mehtod

}  // End of the 'SignUpService' classs
