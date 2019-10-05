import { Action } from '@ngrx/store';
import { ForecastSearchItem } from 'src/app/forcast';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum HomeActionTypes {
  AddToFavorites = '[Home] AddToFavorites',
  // Verb2 = '[Home] Verb2'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddToFavorites implements Action {
  readonly type = HomeActionTypes.AddToFavorites;

  constructor(public payload: ForecastSearchItem) { }
}

// export class Verb2 implements Action {
//   readonly type = HomeActionTypes.Verb2;

//   constructor(public payload: payloadType2) { }
// }

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type HomeActions
  = AddToFavorites;
            // | Verb2;
