import { ComponentFixture, TestBed } from '@angular/core/testing'

import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { HourlyRowComponent } from './hourly-row.component'
import { hourlyMock } from '../../../../utils/mocks/weather-mocks'

describe('HourlyRowComponent', () => {
  let component: HourlyRowComponent
  let fixture: ComponentFixture<HourlyRowComponent>
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyRowComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRowComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should not show the row if it hasn't a hourly object", () => {
    const card = el.query(By.css('.hourly-weather-row'))
    expect(card).toBeNull()
  })

  it('should show the row if it has a hourly object', () => {
    component.hourly = hourlyMock
    fixture.detectChanges()
    const card = el.query(By.css('.hourly-weather-row'))
    expect(card).not.toBeNull()
  })
})
