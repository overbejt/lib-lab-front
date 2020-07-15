import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtAuthenticationService } from './jwt-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router : Router,
    private jwt : JwtAuthenticationService
  ) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

  /**
   * This is the method from CanActivate that must be overridden.
   * 
   * @param route The route snapshot.
   * @param state The router state snapshot.
   */
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.jwt.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }  // End of the 'canActivate' method

}  // End of the 'RouteGuardService' class
