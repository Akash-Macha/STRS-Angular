import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){ }

  canActivate(): boolean{
    console.log("hit in canActivate(): boolean{ - auth.guard.ts ");
    
    if(this._authService.loggedIn()){
      return true;
    } else{
      this._router.navigate(['/login']);
    }
    return false;
  }

}
