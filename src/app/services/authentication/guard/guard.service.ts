import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private _authentication : AuthenticationService,
    private _router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (this._authentication.isAuthenticated() != false)
      return true;
      this._router.navigate(['/login']);
      return false;
  }
}