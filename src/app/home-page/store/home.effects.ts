import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ForecastSearchItem } from 'src/app/forecast.model';
import { AccuWeatherApiService } from '../../accu-weather-api.service';
import { GetSearchOptions, HomeActionTypes, HomeErrors, SaveForecastData, SaveSearchData, SetCityItem } from './home.actions';



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

@Injectable()
export class HomeEffects {
  @Effect()
  homeSearch$: Observable<Action> = this.actions$.pipe(ofType(HomeActionTypes.GetSearchOptions),
    switchMap((search: GetSearchOptions) => {
      return this.serviceApi.getSearchResults(search.payload)
        .pipe(
          map((data: ForecastSearchItem[]) => {
            return new SaveSearchData(data);
          }),
          catchError(errorRes => {
            const errorMessage = 'can not get list of cities';
            return of(new HomeErrors(errorMessage));
          })
        );
    }));

  @Effect({ dispatch: false })
  homeError$ = this.actions$.pipe(
    ofType(HomeActionTypes.HomeErrors),
    tap((errorAction: HomeErrors) => {
      this.snackBar.open(errorAction.payload, 'close', { duration: 5000 });
    })
  );


  @Effect()
  homeForecastData$: Observable<Action> = this.actions$.pipe(ofType(HomeActionTypes.SetCityItem),
    switchMap((setCityItem: SetCityItem) => {
      return this.serviceApi.getForecastData(setCityItem.payload.Key);
    }),
    map(data => new SaveForecastData(data))
  );

  @Effect()
  homeInitData$: Observable<Action> = this.actions$.pipe(
    ofType(HomeActionTypes.InitHomeData),
    switchMap(() => {
      return this.getCityFromCoords();
      // return this.getSelectedCityFromInit();
    }),
  );
  @Effect()
  geoLocationData$: Observable<Action> = this.actions$.pipe(
    ofType(HomeActionTypes.GetCoords),

  );

  constructor(
    private actions$: Actions,
    private serviceApi: AccuWeatherApiService,
    private snackBar: MatSnackBar
  ) { }



  getSelectedCityFromInit() {
    return of(
      { ...telAvivSearchData })
  }

  getCityFromCoords() {
    const prom = new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
    return from(prom).pipe(
      map((position: Position) => {
        const latitude = position.coords.latitude;

        const longitude = position.coords.longitude;
        return latitude + ',' + longitude;
      }),
      switchMap((coords: string) => {
        return this.serviceApi.getCityFromGeoPosition(coords);
      }),
      catchError(() => this.getSelectedCityFromInit()),
      map((data) => new SetCityItem(data))
    );
  }
}
