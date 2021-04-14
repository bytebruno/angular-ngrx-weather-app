import { ActivatedRoute, Router } from '@angular/router'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { IHourly, IWeather } from '../../model/iweather'

import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { getCityCompleteWeatherRequest } from '../../state/weather.actions'
import { selectCityCurrentWeather } from '../../state/weather.selectors'
import { take } from 'rxjs/operators'

@Component({
  selector: 'bb-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent implements OnInit {
  cityId = ''
  city$!: Observable<IWeather>

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id') === null) {
        this.redirectToHome()
      }
      this.cityId = params.get('id') ?? ''
      this.getCityFromStore()
    })
  }

  private getCityFromStore() {
    this.city$ = this.store.select(selectCityCurrentWeather, Number.parseInt(this.cityId))

    this.city$.pipe(take(1)).subscribe((city) => {
      if (city === undefined || city === null) {
        this.redirectToHome()
      } else {
        this.store.dispatch(
          getCityCompleteWeatherRequest({
            cityId: Number.parseInt(this.cityId),
            lat: city.coordinates.lat,
            lon: city.coordinates.lon,
          })
        )
      }
    })
  }

  trackHourly = (index: number, hourly: IHourly) => (hourly ? hourly.dt : null)

  private redirectToHome = () => this.router.navigate(['/'])
}
