import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


/* 
EMAIL: email@gmail.com
PASS: ciaoMarco 
*/

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private api: AuthService,
    private ar: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.api.checkToken()
        .pipe(
          map(response => { // Trasforma l'Observable da tipo LoginResponse in boolean | UrlTree
            if(response.esito) {
              return true;
            } else {
              return this.ar.parseUrl("/login");
            }
          }),
          catchError(error => of(this.ar.parseUrl("/login")))
          // Nel caso di errore, devo restituire un nuovo Observable che mi fa la redirect verso la LoginComponent
        )


      /* questo modo non è completo in quanto andrebbe instanziato un observable che ricontatta il server con CheckToken
      const token = localStorage.getItem("token");
      if(!!token) {
        return true;
      } else {
        return this.ar.parseUrl("/login");
      }
      */
  }
  
}
