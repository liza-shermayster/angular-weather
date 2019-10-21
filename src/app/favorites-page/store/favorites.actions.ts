import { Action } from '@ngrx/store';
import { ForecastSearchItem } from 'src/app/forecast.model';

export enum FavoritesActionTypes {
  AddToFavorites = '[Favorites] AddToFavorites',
  RemoveFromFavorites = '[Favorites] RemoveFromFavorites'
}

export class AddToFavorites implements Action {
  readonly type = FavoritesActionTypes.AddToFavorites;

  constructor(public payload: ForecastSearchItem) { }
}
export class RemoveFromFavorites implements Action {
  readonly type = FavoritesActionTypes.RemoveFromFavorites;

  constructor(public payload: ForecastSearchItem) { }
}

export type FavoritesActions
  = AddToFavorites | RemoveFromFavorites;
