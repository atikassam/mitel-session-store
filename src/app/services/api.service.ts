import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  static readonly _BASE_ = 'https://cat-fact.herokuapp.com'

  constructor(private http: HttpClient) {}
  getItems() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/1`, {
      // withCredentials: true
    })
  }
}
