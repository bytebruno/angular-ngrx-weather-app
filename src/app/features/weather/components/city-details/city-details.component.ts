import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bb-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
