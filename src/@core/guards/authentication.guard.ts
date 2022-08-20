import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkIfCanActivate(state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkIfCanActivate(state);
  }

  checkIfCanActivate(state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      localStorage.setItem('redirectTo', this.router.url);
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
