import { ActivatedRoute, Router, convertToParamMap } from '@angular/router'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import {
  cityMock,
  hourlyMock,
  initialWeatherState,
} from '../../utils/mocks/weather-mocks'

import { By } from '@angular/platform-browser'
import { CityCardComponent } from '../city-card/city-card.component'
import { CityDetailsComponent } from './city-details.component'
import { DebugElement } from '@angular/core'
import { HourlyRowComponent } from './components/hourly-row/hourly-row.component'
import { IWeatherState } from '../../state/weather.reducers'
import { MatCardModule } from '@angular/material/card'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { selectCityCurrentWeather } from '../../state/weather.selectors'

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent
  let fixture: ComponentFixture<CityDetailsComponent>
  let store: MockStore
  let el: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityDetailsComponent, CityCardComponent, HourlyRowComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get() {
                return { id: '2759794' }
              },
            }),
          },
        },
        provideMockStore<IWeatherState>({
          initialState: initialWeatherState,
          selectors: [{ selector: selectCityCurrentWeather, value: null }],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent)
    component = fixture.componentInstance
    store = TestBed.inject(MockStore)
    el = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it("should not show city details if there isn't a city object", () => {
    store.refreshState()
    fixture.detectChanges()

    const cityDetailContainer = el.query(By.css('.city-detail-card-container'))
    expect(cityDetailContainer).toBeNull()
  })

  it('should show city details if there is a city object', () => {
    selectCityCurrentWeather.setResult(cityMock)
    store.refreshState()
    fixture.detectChanges()

    const cityDetailContainer = el.query(By.css('.city-detail-card-container'))
    expect(cityDetailContainer).toBeTruthy()
  })

  it('should display the loading label if nextHours array length is 0', () => {
    let cityWithoutNextHours = { ...cityMock }
    cityWithoutNextHours.nextHours = []
    selectCityCurrentWeather.setResult(cityWithoutNextHours)

    store.refreshState()
    fixture.detectChanges()

    const card = el.query(By.css('.city-detail-card')),
      loadingLabel = card.query(By.css('.loading-label'))

    expect(loadingLabel.nativeElement.hasAttribute('hidden')).toBeFalse()
  })

  it('should not display the loading label if nextHours array length is greater than 0', () => {
    let cityWithNextHours = { ...cityMock }
    cityWithNextHours.nextHours.push(hourlyMock)
    console.log(cityWithNextHours.nextHours)

    selectCityCurrentWeather.setResult(cityWithNextHours)
    store.refreshState()
    fixture.detectChanges()

    const card = el.query(By.css('.city-detail-card')),
      loadingLabel = card.query(By.css('.loading-label'))

    expect(loadingLabel.nativeElement.hasAttribute('hidden')).toBeTrue()
  })
})
