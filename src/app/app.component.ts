import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from "./store/app.reducer";
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'herolor-weather-page';
  favoritesLength: Observable<number>;
  constructor(private store: Store<fromApp.AppState>) { }
  ngOnInit() {
    this.favoritesLength = this.store.select('favorites')
      .pipe(map(data => data.favorites.length));
  }
}
