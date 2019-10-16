import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthAction} from "../../../reducers/auth/actions";
import {Router} from "@angular/router";

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class LoginComponent implements OnInit {
  credential: any = {}

  constructor(public store: Store<any>, public router: Router) {}

  ngOnInit(): void {
    this.store.select('auth')
      .subscribe((auth) => {
        if (auth.is_loggedin) {
          this.router.navigate([''])
        }
        console.log(auth)
      })
  }

  onSubmit() {
    console.log(this.credential, 'com')
    this.store.dispatch(AuthAction.Login({ credentials: this.credential }))
    // this.store.dispatch(AuthAction.StartSession({ token: this.credential }))
  }
}
