import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { FavoritesCityService } from '../favorites-city.service';
import { Forcast, ForecastSearchItem } from '../forcast';
import { Observable } from 'rxjs';
import { AccuWeatherApiService } from '../accu-weather-api.service';


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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient, private favoritesCityService: FavoritesCityService,
    private route: ActivatedRoute,
    private getDataFromApi: AccuWeatherApiService) { }
  cityWeather: Forcast;
  selectedCity: ForecastSearchItem;
  optionsData: ForecastSearchItem[];
  forecastData;
  searchError = null;
  forecastError = null;

  ngOnInit() {
    if (history.state.data) {
      this.selectedCity = history.state.data;
    } else {
      this.selectedCity = telAvivSearchData;
    }
    this.getForecastObject();
  }

  getCity(cityObject: ForecastSearchItem) {

    this.selectedCity = cityObject;
  }

  addToFavorites() {
    this.favoritesCityService.addFavoritesCity({ ...this.selectedCity });
  }

  onSearchChange(value: string) {
    this.getDataFromApi.getSearchResults(value).subscribe((res: ForecastSearchItem[]) => {

      this.optionsData = res;
      this.getForecastObject();
    }, error => {
      this.searchError = error.message;
      setTimeout(() => this.searchError = null, 2000);
    });
  }

  getForecastObject() {
    if (!this.selectedCity) {
      return;
    }
    this.getDataFromApi.getForecastData(this.selectedCity.Key).subscribe(res => {
      console.log('response from forecast', res);
      this.forecastData = res;
    }, error => {
      this.forecastError = error.message;
    });
  }
}
