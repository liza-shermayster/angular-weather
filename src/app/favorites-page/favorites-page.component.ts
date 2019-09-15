import { Component, OnInit } from '@angular/core';
import { FavoritesCityService } from '../favorites-city.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  cityFromSubscription;
  selectedCity;
  constructor(private getFavoritesCity: FavoritesCityService, private router: Router) {
    this.cityFromSubscription = this.getFavoritesCity.getCity().subscribe((data) => {
      console.log('data', data);

      this.selectedCity = data;


    });
  }

  ngOnInit() {
  }
  removeFromFavorites(item) {
    this.getFavoritesCity.removeFavoritesCity({ ...item });
  }

  currentWeather(item) {
    console.log(item);
    this.router.navigate(['/home'], { state: { data: item } });

  }
}
