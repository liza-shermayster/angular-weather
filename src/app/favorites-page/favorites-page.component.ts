import { Component, OnInit } from '@angular/core';
import { FavoritesCityService } from '../favorites-city.service';
import { Router } from '@angular/router';
import { ForecastSearchItem } from '../forcast';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import * as FavoritesActions from "../favorites-page/store/favorites.actions";
import * as HomeActions from "../home-page/store/home.actions";


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  cityFromSubscription;
  favoritesCites: Observable<ForecastSearchItem[]>;
  constructor(private getFavoritesCity: FavoritesCityService, private router: Router,
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.favoritesCites = this.store.select('favorites').pipe(map(data => data.favorites));
  }
  removeFromFavorites(item: ForecastSearchItem) {
    this.store.dispatch(new FavoritesActions.RemoveFromFavorites({ ...item }));
  }

  currentWeather(item) {
    this.store.dispatch(new HomeActions.SetCityItem({ ...item }));
    this.router.navigate(['/home']);
  }
}
