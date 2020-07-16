import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(
    private jwt : JwtAuthenticationService
  ) { }

  /**
   * This is a required method from the HttpInterceptor interface that needs 
   * to be implemented.  It will take the current request.  Add the JWT to 
   * the header using the 'Bearer' prefix.  Then it will return the next 
   * request that needs to be intercepted.
   * 
   *  !!! Make sure to add this to the 'providers' in app.module.ts !!!
   * 
   * @param request The current request to that is intercepted.
   * @param next The next request to intercept.
   * @returns The next request to intercept.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Check if the user is logged in
    if (this.jwt.isLoggedIn()) {
      // If yes, build the header string using prefix 'Bearer' and the user's Token
      let headerString = `Bearer ${this.jwt.getToken()}`;
      // Set the header in the request
      request = request.clone({
        setHeaders : {
          Authorization : headerString
        }
      })
    }
    // Send the next request to intercept
    return next.handle(request);
  }  // End of the 'intercept' method

}  // End of the 'HttpIntercepterService' class
