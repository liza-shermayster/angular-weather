import { HomeActions, HomeActionTypes } from './home.actions';
import { ForecastSearchItem } from 'src/app/forcast';

export interface State {
  favorites: ForecastSearchItem[]
};

const initialState: State = {
  favorites: []
};

export function reducer(state = initialState, action: HomeActions): State {
  switch (action.type) {
    case HomeActionTypes.AddToFavorites: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
