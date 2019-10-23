import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import * as HomeActions from './home-page/store/home.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'herolo-weather-page';
  favoritesLength: Observable<number>;
  constructor(
    private store: Store<fromApp.AppState>) {
    this.store.dispatch(new HomeActions.InitHomeData());
  }

  ngOnInit() {
    this.favoritesLength = this.store.select('favorites')
      .pipe(map(data => data.favorites.length));
  }
}
