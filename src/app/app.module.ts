import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CardWeatherComponent } from './card-weather/card-weather.component';
import { TemperatureConverterPipePipe } from './card-weather/temperature-converter-pipe.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccuWeatherApiService } from './accu-weather-api.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from "./store/app.reducer"

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesPageComponent,
    CardWeatherComponent,
    TemperatureConverterPipePipe,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer)


  ],
  providers: [AccuWeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
