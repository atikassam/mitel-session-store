import {Action, createReducer, on, State} from "@ngrx/store";
import {StoreActions} from "./store.actions";

const initialState = {
  selected_item: null
}
const _storeReducer = createReducer<any>(
  initialState,
  on(StoreActions.SetItem, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'auth reducer');

    return { ...state, selected_item: data.item }
  })
);

export function storeReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _storeReducer(state, action);
}

