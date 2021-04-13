import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CitiesListComponent } from './components/cities-list/cities-list.component'
import { IWeatherState } from './state/weather.reducers'
import { RouterTestingModule } from '@angular/router/testing'
import { WeatherComponent } from './weather.component'
import { initialWeatherState } from './utils/mocks/weather-mocks'
import { provideMockStore } from '@ngrx/store/testing'
import { selectCitiesCurrentWeather } from './state/weather.selectors'

describe('WeatherComponent', () => {
  let component: WeatherComponent
  let fixture: ComponentFixture<WeatherComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, CitiesListComponent],
      providers: [
        provideMockStore<IWeatherState>({
          initialState: initialWeatherState,
          selectors: [{ selector: selectCitiesCurrentWeather, value: null }],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
