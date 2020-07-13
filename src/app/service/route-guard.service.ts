import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthService } from './hard-coded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router : Router,
    private hardCodedAuth : HardCodedAuthService
  ) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.hardCodedAuth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }  // End of the 'canActivate' method

}  // End of the 'RouteGuardService' class
