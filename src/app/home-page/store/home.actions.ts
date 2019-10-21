import { Action } from '@ngrx/store';
import { ForecastSearchItem, Forecast } from 'src/app/forecast.model';

export enum HomeActionTypes {
  GetSearchOptions = '[Home] GetSearchOptions ',
  SetCityItem = '[Home] SetCityItem',
  SaveSearchData = '[Home] SaveSearchData',
  SaveForecastData = '[Home] SaveForecastData',
  InitHomeData = '[Home] InitHomeData',
  InitGeolocationData = '[Home] InitGeolocationData',
  GetCoords = '[Home] GetCoords',
  HomeErrors = '[Home] HomeErrors'
}
export class GetSearchOptions implements Action {
  readonly type = HomeActionTypes.GetSearchOptions;

  constructor(public payload: string) { }
}
export class SetCityItem implements Action {
  readonly type = HomeActionTypes.SetCityItem;

  constructor(public payload: ForecastSearchItem) { }
}
export class SaveSearchData implements Action {
  readonly type = HomeActionTypes.SaveSearchData;

  constructor(public payload: ForecastSearchItem[]) { }
}
export class SaveForecastData implements Action {
  readonly type = HomeActionTypes.SaveForecastData;

  constructor(public payload: Forecast) { }
}
export class InitHomeData implements Action {
  readonly type = HomeActionTypes.InitHomeData;
}
export class GetCoords implements Action {
  readonly type = HomeActionTypes.GetCoords;
}
export class HomeErrors implements Action {
  readonly type = HomeActionTypes.HomeErrors;

  constructor(public payload: string) { }
}

export type HomeActions
  = GetSearchOptions
  | SetCityItem
  | SaveSearchData
  | SaveForecastData
  | InitHomeData
  | GetCoords
  | HomeErrors;

