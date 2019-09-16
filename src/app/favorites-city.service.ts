import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HomePageComponent } from './home-page/home-page.component';
import { ForecastSearchItem } from './forcast';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCityService {
  favoritesCity: ForecastSearchItem[] = [];
  citySubject = new BehaviorSubject<ForecastSearchItem[]>(this.favoritesCity);

  constructor() {
    this.citySubject.next([...this.favoritesCity]);
    console.log('favorites', this.favoritesCity);

  }

  getCity() {
    return this.citySubject.asObservable();
  }

  addFavoritesCity(item: ForecastSearchItem) {
    const checkCity = this.favoritesCity.find((el) => el.LocalizedName === item.LocalizedName);
    if (!checkCity) {
      this.favoritesCity = [...this.favoritesCity, { ...item }];
    }

    this.citySubject.next([...this.favoritesCity]);
  }

  removeFavoritesCity(item) {

    this.favoritesCity = this.favoritesCity.filter((el) => el.LocalizedName !== item.LocalizedName);
    this.citySubject.next([...this.favoritesCity]);
  }
}

