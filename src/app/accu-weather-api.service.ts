import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AccuWeatherApiService {

  constructor(private http: HttpClient) { }

  getSearchResults(value: string) {
    const params = new HttpParams().set('q', value);
    const apiSearch = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=	7ezBvNlInHdoA3Q8spin0UktJnU7w3ut`;
    return this.http.get(apiSearch, { params });
  }

  getForecastData(key) {
    const apiForecastData = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/
      ${key}?apikey=%097ezBvNlInHdoA3Q8spin0UktJnU7w3ut`;
    return this.http.get(apiForecastData);
  }
}
