import {Action, createReducer, on, State} from "@ngrx/store";
import {AuthAction} from "./actions";

const initialState = {}

const scoreboardReducer = createReducer(
  initialState,
  on(AuthAction.StartSession, (state, action) => {
    console.log(action)
    return { ...state }
  }),
);

export function authReducer(state: State<typeof initialState> | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

