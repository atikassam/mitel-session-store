import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";
import {AuthAction} from "./actions";

@Injectable()
export class AuthEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(AuthAction.Login),
    mergeMap(() => new Observable((s) => s.next({ token: 'data' }))
      .pipe(
        map(token => AuthAction.StartSession({ token })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions) {}
}
