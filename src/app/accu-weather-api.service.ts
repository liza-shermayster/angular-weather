import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast, ForecastSearchItem } from './forecast.model';

const BASE_URL = 'https://dataservice.accuweather.com/'

@Injectable({
  providedIn: 'root'
})
export class AccuWeatherApiService {

  constructor(private http: HttpClient) { }

  getSearchResults(value: string) {
    const params = new HttpParams().set('q', value);
    const apiSearch = `${BASE_URL}locations/v1/cities/autocomplete?apikey=%09BfxNVAAFg5Svr2R3IiYzxAPqOUpu0c4t`;
    return this.http.get(apiSearch, { params });
  }

  getForecastData(key: string): Observable<Forecast> {
    const apiForecastData = `${BASE_URL}forecasts/v1/daily/5day/${key}?apikey=%09BfxNVAAFg5Svr2R3IiYzxAPqOUpu0c4t`;
    return this.http.get<Forecast>(apiForecastData);
  }

  getCityFromGeoPosition(location) {
    const localPosition = `${BASE_URL}locations/v1/cities/geoposition/search?apikey=%09BfxNVAAFg5Svr2R3IiYzxAPqOUpu0c4t&q=${location}`;
    return this.http.get<ForecastSearchItem>(localPosition);
  }
}
