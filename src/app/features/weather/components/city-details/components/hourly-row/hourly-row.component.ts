import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'bb-hourly-row',
  templateUrl: './hourly-row.component.html',
  styleUrls: ['./hourly-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourlyRowComponent implements OnInit {
  @Input() hourly!: any
  math = Math

  constructor() {}

  ngOnInit(): void {}
}