import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, Observable, of} from "rxjs";
import {ApiService} from "../../services/api.service";
import {StoreActions} from "./store.actions";

@Injectable()
export class StoreEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(StoreActions.GetItem),
    mergeMap((action) =>
      this.apiService.getItem(action.id)
      //new Observable((s) => s.next({ token: 'data' }))
      .pipe(
        mergeMap(item => {
          return of(StoreActions.SetItem({ item }))
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {
    this.loadMovies$.subscribe(console.log)
  }
}
