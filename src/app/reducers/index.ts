import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {authReducer} from "./auth/auth.reducer";
import {storeReducer} from "./store/store.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  store: storeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
