import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

import { IWeather } from '../../model/iweather'
import { KeyValue } from '@angular/common'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getAllCitiesCurrentWeatherRequest } from '../../state/weather.actions'
import { selectCitiesCurrentWeather } from '../../state/weather.selectors'

@Component({
  selector: 'bb-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesListComponent implements OnInit {
  cities$!: Observable<{ [key: string]: IWeather }>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllCitiesCurrentWeatherRequest())
    this.cities$ = this.store.select(selectCitiesCurrentWeather)
  }

  trackCities = (index: number, city: KeyValue<string, IWeather>) =>
    city ? city.key : null
}
