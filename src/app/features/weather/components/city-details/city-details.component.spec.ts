import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { cityMock, initialWeatherState } from '../../utils/tests-mock.util'

import { CityDetailsComponent } from './city-details.component'
import { IWeatherState } from '../../state/weather.reducers'
import { RouterTestingModule } from '@angular/router/testing'
import { selectCityCurrentWeather } from '../../state/weather.selectors'

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent
  let fixture: ComponentFixture<CityDetailsComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityDetailsComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore<IWeatherState>({
          initialState: initialWeatherState,
          selectors: [{ selector: selectCityCurrentWeather, value: cityMock }],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent)
    component = fixture.componentInstance
    store = TestBed.inject(MockStore)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
