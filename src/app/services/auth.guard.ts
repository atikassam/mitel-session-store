import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Store, select} from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<any>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> {
    // let is_loggedin$ = this.store.pipe(select('auth'))

    return Promise.resolve(!!localStorage.getItem('token'))
  }
}
