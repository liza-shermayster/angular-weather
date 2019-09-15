import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HomePageComponent } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritesCityService {
  favoritesCity = [];
  citySubject = new BehaviorSubject<any>(this.favoritesCity);

  constructor() {
    this.citySubject.next([...this.favoritesCity]);
    console.log('favorites', this.favoritesCity);

  }

  getCity() {
    return this.citySubject.asObservable();
  }

  addFavoritesCity(item) {
    const checkCity = this.favoritesCity.find((el) => el.city === item.city);
    if (!checkCity) {
      this.favoritesCity = [...this.favoritesCity, { ...item }];
    }

    this.citySubject.next([...this.favoritesCity]);
  }

  removeFavoritesCity(item) {

    this.favoritesCity = this.favoritesCity.filter((el) => el.city !== item.city);
    this.citySubject.next([...this.favoritesCity]);
  }
}

