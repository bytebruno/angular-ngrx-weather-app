import { ComponentFixture, TestBed } from '@angular/core/testing'

import { By } from '@angular/platform-browser'
import { CityCardComponent } from './city-card.component'
import { DebugElement } from '@angular/core'
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { RouterTestingModule } from '@angular/router/testing'
import { cityMock } from '../../utils/mocks/weather-mocks'

describe('CityCardComponent', () => {
  let component: CityCardComponent
  let fixture: ComponentFixture<CityCardComponent>
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule],
      declarations: [CityCardComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should not show the card if it hasn't a city object", () => {
    fixture.detectChanges()

    const card = el.query(By.css('.city-card'))

    expect(card).toBeNull()
  })

  it('should show the card if it has a city object', () => {
    component.city = cityMock
    fixture.detectChanges()

    const card = el.query(By.css('.city-card'))

    expect(card).not.toBeNull()
  })

  it('should display the loading label if currentDt property is undefined', () => {
    component.city = cityMock
    component.city.currentDt = undefined
    fixture.detectChanges()

    const loadingLabel = el.query(By.css('.loading-label'))

    expect(loadingLabel.nativeElement.hasAttribute('hidden')).toBeFalse()
  })

  it('should not display the loading label if currentDt property is filled', () => {
    component.city = cityMock
    component.city.currentDt = new Date()
    fixture.detectChanges()

    const loadingLabel = el.query(By.css('.loading-label'))

    expect(loadingLabel.nativeElement.hasAttribute('hidden')).toBeTrue()
  })

  it('should redirect to city details on click', () => {
    component.city = cityMock
    fixture.detectChanges()

    spyOn(component.router, 'navigate')
    component.goToDetails()
    expect(component.router.navigate).toHaveBeenCalledOnceWith([
      '/weather/detail/2759794',
    ])
  })
})
