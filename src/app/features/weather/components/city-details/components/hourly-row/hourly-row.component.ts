import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

import { IHourly } from 'src/app/features/weather/model/iweather'

@Component({
  selector: 'bb-hourly-row',
  templateUrl: './hourly-row.component.html',
  styleUrls: ['./hourly-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourlyRowComponent implements OnInit {
  @Input() hourly!: IHourly

  constructor() {}

  ngOnInit(): void {}
}
