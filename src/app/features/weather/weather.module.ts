import { CitiesListComponent } from './components/cities-list/cities-list.component'
import { CityCardComponent } from './components/city-card/city-card.component'
import { CityDetailsComponent } from './components/city-details/city-details.component'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { MatCardModule } from '@angular/material/card'
import { NgModule } from '@angular/core'
import { OpenWeatherService } from './services/open-weather.service'
import { StoreModule } from '@ngrx/store'
import { WeatherComponent } from './weather.component'
import { WeatherEffects } from './state/weather.effects'
import { WeatherRoutingModule } from './weather-routing.module'
import { weatherFeatureKey } from './state/weather.selectors'
import { weatherReducer } from './state/weather.reducers';
import { HourlyRowComponent } from './components/city-details/components/hourly-row/hourly-row.component'

@NgModule({
  declarations: [
    WeatherComponent,
    CitiesListComponent,
    CityCardComponent,
    CityDetailsComponent,
    HourlyRowComponent,
  ],
  imports: [
    // vendor
    CommonModule,
    WeatherRoutingModule,
    StoreModule.forFeature(weatherFeatureKey, weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),

    // material
    MatCardModule,
  ],
  providers: [OpenWeatherService],
})
export class WeatherModule {}
