import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> {
    return Promise.resolve(false)
  }
}
