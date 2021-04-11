import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

import { IWeather } from '../../model/iweather'
import { Router } from '@angular/router'

@Component({
  selector: 'bb-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  @Input() city!: IWeather

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails() {
    this.router.navigate([`/weather/detail/${this.city.id}`])
  }
}
