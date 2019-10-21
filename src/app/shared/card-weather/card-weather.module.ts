import { NgModule } from '@angular/core';

import { CardWeatherComponent } from './card-weather.component';
import { MaterialModule } from 'src/app/material';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [MaterialModule, CommonModule, PipesModule],
  exports: [CardWeatherComponent],
  declarations: [CardWeatherComponent],
  providers: [],
})
export class CardWeatherModule { }
