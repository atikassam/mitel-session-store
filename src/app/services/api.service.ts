import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  static readonly _BASE_ = 'http://localhost:3000'

  constructor(private http: HttpClient) {}
  getItems() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/1`, {
      // withCredentials: true
    })
  }
  getItem(id) {
    return this.http.get(`${ApiService._BASE_}/items/${ id }`, {
      // withCredentials: true
    })
  }

  login() {
    return this.http.get(`${ ApiService._BASE_ }/login`, {
      // withCredentials: true
    })
      .pipe(map((data: any) => {

      console.log(data);

      localStorage.setItem('token', JSON.stringify(data.token || {}))

      return data
    }))
  }
}
