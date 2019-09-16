import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { FavoritesCityService } from '../favorites-city.service';
import { Forcast, ForecastSearchItem } from '../forcast';


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

  constructor(private http: HttpClient, private favoritesCityService: FavoritesCityService, private route: ActivatedRoute) { }
  cityWeather: Forcast;
  dataFromFavorites;
  id;
  selectedCity: ForecastSearchItem;
  optionsData: ForecastSearchItem[];
  forecastData;
  optionsFilteredData;


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

    // const myObject = this.getDataFromSearch.find((cityData) => cityData.LocalizedName === cityName);
    // this.selectedCity.key = myObject.Key;
    // this.selectedCity.city = myObject.LocalizedName;

  }

  addToFavorites() {
    this.favoritesCityService.addFavoritesCity({ ...this.selectedCity });
  }

  onSearchChange(value: string) {
    const params = new HttpParams().set('q', value);
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/'
    const apiSearch = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=37aFnzhWyR6vlu9bzajjpPG1RoKf89oS`;
    this.http.get(apiSearch, { params }).subscribe((res: ForecastSearchItem[]) => {
      console.log('res from url ', res);

      this.optionsData = res;
      // this.optionsFilteredData = this.optionsData.map((item) => item.LocalizedName);
      this.getForecastObject();

    });
  }

  getForecastObject() {
    if (!this.selectedCity) {
      return;
    }
    const apiForecastData = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/
    ${this.selectedCity.Key}?apikey=%0937aFnzhWyR6vlu9bzajjpPG1RoKf89oS`;
    this.http.get(apiForecastData).subscribe(res => {
      console.log('response from forecast', res);
      this.forecastData = res;
    });
  }


}
