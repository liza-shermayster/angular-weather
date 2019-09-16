import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { FavoritesCityService } from '../favorites-city.service';
import { Forcast, ForecastSearchItem } from '../forcast';
import { Observable } from 'rxjs';
import { AccuWeatherApiService } from '../accu-weather-api.service';


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

  constructor(private http: HttpClient, private favoritesCityService: FavoritesCityService,
    private route: ActivatedRoute,
    private getDataFromApi: AccuWeatherApiService) { }
  cityWeather: Forcast;
  dataFromFavorites;
  id;
  selectedCity: ForecastSearchItem;
  optionsData: ForecastSearchItem[];
  forecastData;
  optionsFilteredData;
  error = null;




  fetchCityWeather() {
    this.http.get('./assets/cityWeather.json')
      .subscribe((cityData: Forcast) => {
        this.cityWeather = cityData;

      });

  }
  getCityData(key: string) {
    this.http.get(name).pipe(
      map(res => res)
    );
  }




  ngOnInit() {
    if (history.state.data) {
      this.selectedCity = history.state.data;
    } else {
      this.selectedCity = telAvivSearchData;
    }
    // this.fetchCityWeather();
    this.getForecastObject();

    console.log(this.route);
    console.log('history data', history.state.data);

  }

  getCity(cityObject: ForecastSearchItem) {
    console.log('get from search', cityObject);
    this.selectedCity = cityObject;
  }

  addToFavorites() {
    this.favoritesCityService.addFavoritesCity({ ...this.selectedCity });
  }

  onSearchChange(value: string) {
    this.getDataFromApi.getSearchResults(value).subscribe((res: ForecastSearchItem[]) => {
      console.log('res from url ', res);
      this.optionsData = res;
      this.getForecastObject();
    });
  }

  getForecastObject() {
    if (!this.selectedCity) {
      return;
    }
    this.getDataFromApi.getForecastData(this.selectedCity.Key).subscribe(res => {
      console.log('response from forecast', res);
      this.forecastData = res;
    }, error => {
      this.error = error.message;
    });
  }




}
