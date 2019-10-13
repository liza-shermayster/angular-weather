
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as FavoritesActions from "../favorites-page/store/favorites.actions";
import { Forecast, ForecastSearchItem } from '../forcast';
import * as fromApp from "../store/app.reducer";
import * as HomeActions from "./store/home.actions";






@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  cityWeather: Observable<Forecast>;
  selectedCity: Observable<ForecastSearchItem>;
  optionsData: Observable<ForecastSearchItem[]>;
  searchError = null;
  forecastError = null;
  favoritesCites: Observable<ForecastSearchItem[]>;
  isInFavorites: Observable<boolean>;
  getError;

  constructor(
    private store: Store<fromApp.AppState>) {
    this.store.dispatch(new HomeActions.InitHomeData());
  }


  ngOnInit() {

    console.log('ngOnInit-home');
    this.favoritesCites = this.store.select('favorites').pipe(map(data => data.favorites));
    const state = this.store.select('home');
    this.selectedCity = state.pipe(map(data => data.selectedCity));
    this.cityWeather = state.pipe(map(data => data.forecastData));
    this.optionsData = state.pipe(map(data => data.searchItems));
    // this.getError = this.store.select('home').pipe(map(data => data.errorMessage));
    this.isInFavorites = combineLatest(this.favoritesCites, this.selectedCity)
      .pipe(
        map(([favorites, city]) => {
          console.log('in favorites', !!favorites.find(c => c.Key === city.Key));
          return !!favorites.find(c => c.Key === city.Key);
        }));

  }

  setCity(cityObject: ForecastSearchItem) {
    this.store.dispatch(new HomeActions.SetCityItem({ ...cityObject }));
  }

  addToFavorites(cityItem: ForecastSearchItem) {
    this.store.dispatch(new FavoritesActions.AddToFavorites({ ...cityItem }));
  }

  removeFromFavoritesCites(cityItem) {
    this.store.dispatch(new FavoritesActions.RemoveFromFavorites({ ...cityItem }));
  }

  onSearchChange(value: string) {
    // if (this.getError) {
    //   alert(this.getError);
    // } else {
    this.store.dispatch(new HomeActions.GetSearchOptions(value));
    // }
  }

}
