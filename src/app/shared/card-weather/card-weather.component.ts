import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from '../../forecast.model';


@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {

  @Input() dayData: DailyForecast;
  imgUrl: string;

  ngOnInit() {
    this.imgUrl = this.getImageUrl();
  }

  getImageUrl(): string {
    return `https://developer.accuweather.com/sites/default/files/${this.getIconCode()}-s.png`;
  }

  getIconCode(): string {
    if (this.dayData.Day.Icon < 10) {
      return '0' + this.dayData.Day.Icon;
    }
    return String(this.dayData.Day.Icon);
  }

}
