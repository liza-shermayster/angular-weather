import { Component, OnInit } from '@angular/core';
import { FavoritesCityService } from '../favorites-city.service';
import { Router } from '@angular/router';
import { ForecastSearchItem } from '../forcast';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

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
    // this.cityFromSubscription = this.getFavoritesCity.getCity().subscribe((data: ForecastSearchItem[]) => {
    //   console.log('data', data);
    //   this.favoritesCites = data;
    // });
  }

  ngOnInit() {
    this.favoritesCites = this.store.select('home').pipe(map(data => data.favorites));
  }
  removeFromFavorites(item: ForecastSearchItem) {
    this.getFavoritesCity.removeFavoritesCity({ ...item });
  }

  currentWeather(item) {

    this.router.navigate(['/home'], { state: { data: item } });

  }
}
