import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { isNgTemplate } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forcast } from '../forcast';
// import {default as serverWeaster} from '../assets/data'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  cityWeather: Forcast;

  fetchCityWeather() {
    this.http.get('./assets/cityWeather.json')
      .subscribe((cityData: Forcast) => {
        this.cityWeather = cityData;
        console.log(this.cityWeather);
      });

  }


  ngOnInit() {
    this.fetchCityWeather();
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

  getCity(cityName) {
    console.log('item', cityName);
    const myObject = this.myData.find((cityData) => cityData.LocalizedName === cityName);
    console.log('myObject', myObject);
    this.selectedCity.key = myObject.Key;
    this.selectedCity.city = myObject.LocalizedName;

  }
  favoritesCity = [];

  addToFavorites() {
    this.favoritesCity.push({ ...this.selectedCity });
    console.log('favorites city', this.favoritesCity);

  }


}
