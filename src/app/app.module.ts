import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AccuWeatherApiService } from './accu-weather-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { HomeEffects } from './home-page/store/home.effects';
import { MaterialModule } from './material';
import * as fromApp from "./store/app.reducer";
import { FavoritesModule } from './favorites-page/favorites.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FavoritesModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([HomeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HomePageModule
  ],
  providers: [AccuWeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
