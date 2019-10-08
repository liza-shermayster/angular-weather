import { Action } from '@ngrx/store';
import { ForecastSearchItem } from 'src/app/forcast';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum FavoritesActionTypes {
  AddToFavorites = '[Favorites] AddToFavorites',
  RemoveFromFavorites = '[Favorites] RemoveFromFavorites'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddToFavorites implements Action {
  readonly type = FavoritesActionTypes.AddToFavorites;

  constructor(public payload: ForecastSearchItem) { }
}
export class RemoveFromFavorites implements Action {
  readonly type = FavoritesActionTypes.RemoveFromFavorites;

  constructor(public payload: ForecastSearchItem) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type FavoritesActions
  = AddToFavorites | RemoveFromFavorites;
