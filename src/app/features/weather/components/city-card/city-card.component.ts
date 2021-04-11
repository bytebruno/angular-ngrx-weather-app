import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

import { ICurrentWeather } from '../../model/icurrent-weather'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'bb-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  @Input() city!: ICurrentWeather
  city$!: Observable<any>
  math = Math

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails() {
    this.router.navigate([`/weather/detail/${this.city.id}`])
  }
}
