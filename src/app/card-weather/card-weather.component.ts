import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from '../forcast';


@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent {

  @Input() dayData: DailyForecast;
  myData;
  iconeCodeDay;
  imgUrl;
  day;

  constructor() {



    // imgUrl = `https://developer.accuweather.com/sites/default/files/${this.iconCode}-s.png`;

    // this.myData = {
    //   "Headline": {
    //     "EffectiveDate": "2019-09-14T08:00:00+03:00",
    //     "EffectiveEpochDate": 1568437200,
    //     "Severity": 7,
    //     "Text": "Mostly sunny this weekend",
    //     "Category": "",
    //     "EndDate": null,
    //     "EndEpochDate": null,
    //     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
    //     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    //   },
    //   "DailyForecasts":
    //   {
    //     "Date": "2019-09-09T07:00:00+03:00",
    //     "EpochDate": 1568001600,
    //     "Temperature": {
    //       "Minimum": {
    //         "Value": 75,
    //         "Unit": "F",
    //         "UnitType": 18
    //       },
    //       "Maximum": {
    //         "Value": 87,
    //         "Unit": "F",
    //         "UnitType": 18
    //       }
    //     },
    //     "Day": {
    //       "Icon": 2,
    //       "IconPhrase": "Mostly sunny",
    //       "HasPrecipitation": false
    //     },
    //     "Night": {
    //       "Icon": 34,
    //       "IconPhrase": "Mostly clear",
    //       "HasPrecipitation": false
    //     },
    //     "Sources": [
    //       "AccuWeather"
    //     ],
    //     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    //     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    //   }
    // }
    // this.iconeCodeDay = this.myData.DailyForecasts.Day.Icon;
    // if (this.iconeCodeDay < 10) {
    //   this.iconeCodeDay = '0' + this.iconeCodeDay;
    // }
    // this.imgUrl = `https://developer.accuweather.com/sites/default/files/${this.iconeCodeDay}-s.png`;
  }
}
