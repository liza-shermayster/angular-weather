import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { CardWeatherComponent } from './card-weather/card-weather.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import { SearchModule } from './search/search.module';
import { CardWeatherModule } from './card-weather/card-weather.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SearchModule,
    CardWeatherModule,
    PipesModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CardWeatherModule,
    TemperatureConverterPipe,
    SearchModule,
    PipesModule

  ]
})
export class SharedModule { }
