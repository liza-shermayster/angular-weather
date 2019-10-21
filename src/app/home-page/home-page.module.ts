import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page.component';



@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule { }
