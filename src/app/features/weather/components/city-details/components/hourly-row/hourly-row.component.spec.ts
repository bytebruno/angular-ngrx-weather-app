import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HourlyRowComponent } from './hourly-row.component'
import { IHourly } from 'src/app/features/weather/model/iweather'

const hourlyMock: IHourly = {
  icon: 'wi wi-rain',
  hour: Date.UTC(2021, 3, 10, 10, 30, 0).toString(),
  condition: 'Rain',
  dt: 123456789,
  temperature: 6,
}

describe('HourlyRowComponent', () => {
  let component: HourlyRowComponent
  let fixture: ComponentFixture<HourlyRowComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyRowComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRowComponent)
    component = fixture.componentInstance
    component.hourly = hourlyMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
