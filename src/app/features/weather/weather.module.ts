import { CitiesListComponent } from './components/cities-list/cities-list.component'
import { CityCardComponent } from './components/city-card/city-card.component'
import { CityDetailsComponent } from './components/city-details/city-details.component'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { NgModule } from '@angular/core'
import { WeatherComponent } from './weather.component'
import { WeatherRoutingModule } from './weather-routing.module'

@NgModule({
  declarations: [
    WeatherComponent,
    CitiesListComponent,
    CityCardComponent,
    CityDetailsComponent,
  ],
  imports: [
    // vendor
    CommonModule,
    WeatherRoutingModule,

    // material
    MatCardModule,
  ],
})
export class WeatherModule {}
