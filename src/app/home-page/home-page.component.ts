
import { Component, OnInit } from '@angular/core';
import { FavoritesCityService } from '../favorites-city.service';
import { Forecast, ForecastSearchItem } from '../forcast';
import { AccuWeatherApiService } from '../accu-weather-api.service';
import { Store } from '@ngrx/store';
import * as fromApp from "../store/app.reducer";
import * as FavoritesActions from "../favorites-page/store/favorites.actions";
import { HomeActionTypes } from './store/home.actions';
import * as HomeActions from "./store/home.actions";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cityWeather: Observable<Forecast>;
  selectedCity: Observable<ForecastSearchItem>;
  optionsData: Observable<ForecastSearchItem[]>;
  searchError = null;
  forecastError = null;

  constructor(
    private store: Store<fromApp.AppState>) { }


  ngOnInit() {
    this.store.dispatch(new HomeActions.InitHomeData());
    const state = this.store.select('home');
    this.selectedCity = state.pipe(map(data => data.selectedCity));
    this.cityWeather = state.pipe(map(data => data.forecastData));
    this.optionsData = state.pipe(map(data => data.searchItems));
  }

  setCity(cityObject: ForecastSearchItem) {
    this.store.dispatch(new HomeActions.SetCityItem({ ...cityObject }));
  }

  addToFavorites(cityItem: ForecastSearchItem) {
    this.store.dispatch(new FavoritesActions.AddToFavorites({ ...cityItem }));
  }

  onSearchChange(value: string) {
    this.store.dispatch(new HomeActions.GetSearchOptions(value));
  }
}
