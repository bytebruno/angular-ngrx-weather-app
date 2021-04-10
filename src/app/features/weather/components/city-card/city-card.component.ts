import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

@Component({
  selector: 'bb-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  @Input() city!: any
  city$!: Observable<any>
  math = Math

  constructor() {}

  ngOnInit(): void {}
}
