import { RouterModule, Routes } from '@angular/router'

import { CityDetailsComponent } from './components/city-details/city-details.component'
import { NgModule } from '@angular/core'
import { WeatherComponent } from './weather.component'

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'detail/:id', component: CityDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
