import { ActionReducerMap } from "@ngrx/store";
import * as Favorites from "../favorites-page/store/favorites.reducer";
import * as Home from '../home-page/store/home.reducer';

export interface AppState {
  favorites: Favorites.State;
  home: Home.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  favorites: Favorites.reducer,
  home: Home.reducer
}
