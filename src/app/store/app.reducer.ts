import { ActionReducerMap } from "@ngrx/store";
import * as Home from "../home-page/store/home.reducer";

export interface AppState {
  home: Home.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  home: Home.reducer
}
