import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthAction} from "../../../reducers/auth/actions";

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class LoginComponent {
  credential: any = {}

  constructor(public store: Store<any>) {}

  onSubmit() {
    console.log(this.credential, 'com')
    this.store.dispatch(AuthAction.Login({ credentials: this.credential }))
  }
}
