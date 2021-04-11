import { ActivatedRoute, Router } from '@angular/router'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { selectCityCurrentWeather } from '../../state/weather.selectors'

@Component({
  selector: 'bb-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityDetailsComponent implements OnInit {
  cityId: string = ''
  city$!: Observable<any>
  math = Math

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id') === null) this.redirectToHome()

      this.cityId = params.get('id') ?? ''

      this.getCityFromStore()
    })
  }

  private getCityFromStore() {
    this.city$ = this.store.select(selectCityCurrentWeather, Number.parseInt(this.cityId))

    this.city$.subscribe((x) => {
      console.log(x)
      if (x === undefined) this.redirectToHome()
    })
  }

  private redirectToHome = () => this.router.navigate(['/'])
}
