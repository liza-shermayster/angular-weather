import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccuWeatherApiService {

  constructor(private http: HttpClient) { }
  searchCity(): Observable<Object> {
    return this.http.get('/assets/search-city.json');
  }
  searchSpecialCity(): Observable<Object> {
    return this.http.get('/assets/cityWeather.json');
  }
}
