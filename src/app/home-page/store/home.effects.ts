import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HomeActionTypes, SaveSearchData, GetSearchOptions, GetForecastData, SaveForecastData, SetCityItem, InitHomeData } from './home.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { AccuWeatherApiService } from '../../accu-weather-api.service';
import { ForecastSearchItem } from 'src/app/forcast';
import * as fromApp from "../../store/app.reducer";



@Injectable()
export class HomeEffects {
  @Effect()
  homeSearch$: Observable<Action> = this.actions$.pipe(ofType(HomeActionTypes.GetSearchOptions),
    switchMap((search: GetSearchOptions) => {
      return this.serviceApi.getSearchResults(search.payload)
        .pipe(
          map((data: ForecastSearchItem[]) => {
            return new SaveSearchData(data);
          })
        )
    }));

  @Effect()
  homeForecastData$: Observable<Action> = this.actions$.pipe(ofType(HomeActionTypes.SetCityItem),
    switchMap((setCityItem: SetCityItem) => {
      return this.serviceApi.getForecastData(setCityItem.payload.Key)
    }),
    map(data => new SaveForecastData(data))
  )

  @Effect()
  homeInitData$: Observable<Action> = this.actions$.pipe(
    ofType(HomeActionTypes.InitHomeData),
    switchMap(() => this.store.select('home').pipe(map(data => data.selectedCity))),
    switchMap((selectedCity: ForecastSearchItem) => {
      return this.serviceApi.getForecastData(selectedCity.Key)
    }),
    map(data => new SaveForecastData(data))
  )

  constructor(
    private actions$: Actions,
    private serviceApi: AccuWeatherApiService,
    private store: Store<fromApp.AppState>
  ) { }
}
