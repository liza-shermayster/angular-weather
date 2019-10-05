import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { FavoritesCityService } from '../favorites-city.service';
import { Forcast, ForecastSearchItem } from '../forcast';
import { Observable } from 'rxjs';
import { AccuWeatherApiService } from '../accu-weather-api.service';
import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducer";
import * as HomeActions from "./store/home.actions";


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
  cityWeather: Forcast;
  selectedCity: ForecastSearchItem;
  optionsData: ForecastSearchItem[];
  forecastData;
  searchError = null;
  forecastError = null;

  constructor(private favoritesCityService: FavoritesCityService,
    private getDataFromApi: AccuWeatherApiService,
    private store: Store<fromApp.AppState>) { }


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

    this.store.dispatch(new HomeActions.AddToFavorites({ ...this.selectedCity }));
    // this.favoritesCityService.addFavoritesCity({ ...this.selectedCity });
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
      this.forecastData = res;
    }, error => {
      this.forecastError = error.message;
    });
  }
}
