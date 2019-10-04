import { Component, OnInit } from '@angular/core';
import { FavoritesCityService } from '../favorites-city.service';
import { Router } from '@angular/router';
import { ForecastSearchItem } from '../forcast';
@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  cityFromSubscription;
  favoritesCites: ForecastSearchItem[];
  constructor(private getFavoritesCity: FavoritesCityService, private router: Router) {
    this.cityFromSubscription = this.getFavoritesCity.getCity().subscribe((data: ForecastSearchItem[]) => {
      console.log('data', data);
      this.favoritesCites = data;
    });
  }

  ngOnInit() {
  }
  removeFromFavorites(item: ForecastSearchItem) {
    this.getFavoritesCity.removeFavoritesCity({ ...item });
  }

  currentWeather(item) {

    this.router.navigate(['/home'], { state: { data: item } });

  }
}
