import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from '../../forcast';


@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {

  @Input() dayData: DailyForecast;
  imgUrl: string;

  ngOnInit() {
    this.imgUrl = `https://developer.accuweather.com/sites/default/files/${this.getIconCode()}-s.png`;
  }

  getIconCode() {
    if (this.dayData.Day.Icon < 10) {
      return '0' + this.dayData.Day.Icon;
    }
    return this.dayData.Day.Icon;
  }

}
