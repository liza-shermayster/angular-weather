import { NgModule } from '@angular/core';

import { FavoritesPageComponent } from './favorites-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [FavoritesPageComponent],
  declarations: [FavoritesPageComponent],
  providers: [],
})
export class FavoritesModule { }
