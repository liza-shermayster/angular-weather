import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as FavoritesActions from '../favorites-page/store/favorites.actions';
import { Forecast, ForecastSearchItem } from '../forecast.model';
import * as fromApp from '../store/app.reducer';
import * as HomeActions from './store/home.actions';
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


  constructor(
    private store: Store<fromApp.AppState>) {
    this.store.dispatch(new HomeActions.InitHomeData());
  }

  ngOnInit() {
    this.favoritesCites = this.store.select('favorites').pipe(map(data => data.favorites));
    const state = this.store.select('home');
    this.selectedCity = state.pipe(map(data => data.selectedCity));
    this.cityWeather = state.pipe(map(data => data.forecastData));
    this.optionsData = state.pipe(map(data => data.searchItems));
    this.isInFavorites = combineLatest(this.favoritesCites, this.selectedCity)
      .pipe(
        map(([favorites, city]) => {
          return !!favorites.find(c => c.Key === city.Key);
        }));
  }

  setCity(cityObject: ForecastSearchItem) {
    this.store.dispatch(new HomeActions.SetCityItem({ ...cityObject }));
  }

  addToFavorites(cityItem: ForecastSearchItem) {
    this.store.dispatch(new FavoritesActions.AddToFavorites({ ...cityItem }));
  }

  removeFromFavoritesCites(cityItem: ForecastSearchItem) {
    this.store.dispatch(new FavoritesActions.RemoveFromFavorites({ ...cityItem }));
  }

  onSearchChange(value: string) {
    this.store.dispatch(new HomeActions.GetSearchOptions(value));
  }
}
