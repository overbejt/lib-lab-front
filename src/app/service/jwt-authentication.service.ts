import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(
    private http : HttpClient
  ) { }

  /**
   * This is the method that will login the user.  It will contact the API and 
   * supply the username and password supplied by the user on the login page.
   * If login is successful, a JWT will be sent back.  This method will return 
   * an observable.
   * 
   * @param username The username supplied by the user from the login page.
   * @param password The password supplied by the user from the login page.
   */
  login(username, password) {
    // Set up the URL    
    let url = `${API_URL}/login`; 
    // Build the body of the POST request
    let body = { 
      username : username, 
      password : password 
    };    
    // Send back the observable
    return this.http.post<Token>(url, body).pipe(
      map(
        data => {
          console.log('token recieved');
          // console.log(data);
          // Store the username
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          // Store the token
          sessionStorage.setItem(TOKEN, data.token);
          // Send the data back
          return data;
        }
      )
    );
  }  // End of the 'login' method

  /**
   * This is the method that will log the user out.
   */
  logout() : void {
    // Remove the username from the session storage
    sessionStorage.removeItem(AUTHENTICATED_USER);
    // Remove the token from the session storage
    sessionStorage.removeItem(TOKEN);
  }  // End of the 'logout' method

  /**
   * This is the method that will check if the user is logged in or not.
   * 
   * @returns True when the user is logged in.  Otherwise, false.
   */
  isLoggedIn() : boolean {
    return !!(sessionStorage.getItem(AUTHENTICATED_USER));
  }  // End of the 'isLoggedIn' method

  /**
   * This is the method that will get the user's username and return it.
   * 
   * @returns The user's username as a string.
   */
  getAuthenticatedUser() : string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }  // End of the 'getAuthenticatedUser' method

  /**
   * This is the method that will get the user's token and return it.
   * 
   * @returns The user's token as a string.
   */
  getToken() : string {
    return sessionStorage.getItem(TOKEN);
  }  // End of the 'getToken' method
    
}  // End of the 'JwtAuthenticationService' class

/**
 * This is the class that will define the token object that will be sent back 
 * from the  API.
 */
export class Token {
  constructor (public token : string) { }
}  // End of the 'Token' class
