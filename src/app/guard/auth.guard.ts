import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const jwtService = new JwtHelperService()
      const token = localStorage.getItem('jwt');

      if (token !== null){
        if (jwtService.isTokenExpired(token)){
          this.router.navigate(['login'])
        }
        const userRole = jwtService.decodeToken(token);
        const expectedAccept = route.data.expectedRole;
        const userAcceptLink = this.checkUserRole(route?.routeConfig?.path, userRole?.role);

        if (expectedAccept !== userAcceptLink) {
          this.router.navigate(['403']);

          return false;
        }

        return true;
      }

      this.router.navigate(['']);
      return false;
  }

  checkUserRole(pRoutePath: string | undefined, role : string){
    let activeLink = 'Accepted';
    switch(pRoutePath) {
      case 'user' :
      case 'path2':
        activeLink = role === null ? '' : role !== 'admin' ? 'Fail' : 'Accepted';
        break
    }

    return activeLink;
  }
  
}
