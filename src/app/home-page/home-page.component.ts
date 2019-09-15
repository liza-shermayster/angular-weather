import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { isNgTemplate } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forcast } from '../forcast';
import { FavoritesCityService } from '../favorites-city.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
// import {default as serverWeaster} from '../assets/data'


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
  getDataFromSearch;

  fetchCityWeather() {
    this.http.get('./assets/cityWeather.json')
      .subscribe((cityData: Forcast) => {
        this.cityWeather = cityData;

      });

  }


  ngOnInit() {
    this.fetchCityWeather();
    console.log(this.route);
    console.log('history data', history.state.data);

  }

  iconCode = '34';
  imgUrl = `https://developer.accuweather.com/sites/default/files/${this.iconCode}-s.png`;



  myData = [
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    {
      "Version": 1,
      "Key": "215853",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "Tel Litwinsky",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    {
      "Version": 1,
      "Key": "214372",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "Tel Teomim",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "Z",
        "LocalizedName": "Northern District"
      }
    },
    {
      "Version": 1,
      "Key": "3241777",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "Tel Bigha",
      "Country": {
        "ID": "IN",
        "LocalizedName": "India"
      },
      "AdministrativeArea": {
        "ID": "BR",
        "LocalizedName": "Bihar"
      }
    },
    {
      "Version": 1,
      "Key": "3240530",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "Tel Bigha",
      "Country": {
        "ID": "IN",
        "LocalizedName": "India"
      },
      "AdministrativeArea": {
        "ID": "BR",
        "LocalizedName": "Bihar"
      }
    },
    {
      "Version": 1,
      "Key": "209001",
      "Type": "City",
      "Rank": 95,
      "LocalizedName": "Tel Arza",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "JM",
        "LocalizedName": "Jerusalem"
      }
    },
    {
      "Version": 1,
      "Key": "215832",
      "Type": "City",
      "Rank": 95,
      "LocalizedName": "Tel Ganim",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    {
      "Version": 1,
      "Key": "215784",
      "Type": "City",
      "Rank": 95,
      "LocalizedName": "Tel Kabir",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    {
      "Version": 1,
      "Key": "215766",
      "Type": "City",
      "Rank": 95,
      "LocalizedName": "Tel Khayim",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    }
  ];

  optionsData = this.myData.map((item) => item.LocalizedName);

  selectedCity = {
    key: null,
    city: ''
  };

  getCityData(key: string) {
    this.http.get(name).pipe(
      map(res => res)
    );
  }


  getCity(cityName) {
    this.getDataFromSearch = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%0937aFnzhWyR6vlu9bzajjpPG1RoKf89oS&${cityName}"
    const myObject = this.getDataFromSearch.find((cityData) => cityData.LocalizedName === cityName);
    this.selectedCity.key = myObject.Key;
    this.selectedCity.city = myObject.LocalizedName;

  }

  addToFavorites() {
    this.favoritesCityService.addFavoritesCity({ ...this.selectedCity });
  }


}
