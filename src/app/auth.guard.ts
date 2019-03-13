import { Injectable } from '@angular/core';
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, CanActivateChild } from '@angular/router';
import { Storage } from './core/services/storage/storage';
import { UserService } from './core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

    constructor(
      private router: Router,
      private storage: Storage,
      private userService: UserService) { }

    private isLoggedIn() {
      const user = this.userService.getUser();
      return !UserService.tokenIsExpired(user);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isLoggedIn()) {
          // logged in so return true
          return true;
        } else {
          this.router.navigate(['/account/login']);
          return false;
        }
    }

    canLoad(route: Route): any {
        if (this.isLoggedIn()) {
          // logged in so return true
          return true;
        } else {
          this.router.navigate(['/account/login']);
          return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(childRoute, state);
    }
}
