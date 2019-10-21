import { HomeActions, HomeActionTypes } from './home.actions';
import { ForecastSearchItem, Forecast } from 'src/app/forecast.model';



const telAvivSearchData = {
  Version: 1,
  Key: '215854',
  Type: 'City',
  Rank: 31,
  LocalizedName: 'Tel Aviv',
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel'
  },
  AdministrativeArea: {
    ID: 'TA',
    LocalizedName: 'Tel Aviv'
  }
};

export interface State {
  searchItems: ForecastSearchItem[];
  forecastData: Forecast | null;
  selectedCity: ForecastSearchItem | null;
  errorMessage: string;
};

const initialState: State = {
  searchItems: [],
  forecastData: null,
  selectedCity: null,
  errorMessage: null
};

export function reducer(state = initialState, action: HomeActions): State {
  switch (action.type) {
    case HomeActionTypes.SaveSearchData: {
      return {
        ...state,
        searchItems: [...action.payload]
      };
    }
    case HomeActionTypes.SaveForecastData: {
      return {
        ...state,
        forecastData: action.payload
      };
    }
    case HomeActionTypes.SetCityItem: {
      return {
        ...state,
        selectedCity: action.payload
      };
    }
    case HomeActionTypes.HomeErrors: {
      return {
        ...state,
        errorMessage: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
