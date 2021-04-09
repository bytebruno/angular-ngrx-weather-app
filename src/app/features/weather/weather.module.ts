import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';


@NgModule({
  declarations: [
    WeatherComponent,
    CitiesListComponent,
    CityCardComponent,
    CityDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
