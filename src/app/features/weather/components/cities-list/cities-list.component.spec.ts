import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { cityMock, initialWeatherState } from '../../utils/tests-mock.util'

import { CitiesListComponent } from './cities-list.component'
import { IWeatherState } from '../../state/weather.reducers'
import { SortByNamePipe } from '../../pipes/sort-by-name.pipe'
import { selectCitiesCurrentWeather } from '../../state/weather.selectors'

describe('CitiesListComponent', () => {
  let component: CitiesListComponent
  let fixture: ComponentFixture<CitiesListComponent>
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitiesListComponent, SortByNamePipe],
      providers: [
        provideMockStore<IWeatherState>({
          initialState: initialWeatherState,
          selectors: [
            { selector: selectCitiesCurrentWeather, value: initialWeatherState },
          ],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
