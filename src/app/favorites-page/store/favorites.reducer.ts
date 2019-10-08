import { FavoritesActions, FavoritesActionTypes } from './favorites.actions';
import { ForecastSearchItem } from 'src/app/forcast';

export interface State {
  favorites: ForecastSearchItem[];
}

const initialState: State = {
  favorites: []
};

export function reducer(state = initialState, action: FavoritesActions): State {
  switch (action.type) {
    case FavoritesActionTypes.AddToFavorites: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    }
    case FavoritesActionTypes.RemoveFromFavorites: {
      return {
        ...state,
        favorites: state.favorites
          .filter(fav => fav.LocalizedName !== action.payload.LocalizedName)
      };
    }

    default: {
      return state;
    }
  }
}

