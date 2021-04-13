import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { citiesMock, initialWeatherState } from '../../utils/mocks/weather-mocks'

import { By } from '@angular/platform-browser'
import { CitiesListComponent } from './cities-list.component'
import { CityCardComponent } from '../city-card/city-card.component'
import { DebugElement } from '@angular/core'
import { IWeatherState } from '../../state/weather.reducers'
import { MatCardModule } from '@angular/material/card'
import { RouterTestingModule } from '@angular/router/testing'
import { SortByNamePipe } from '../../pipes/sort-by-name.pipe'
import { selectCitiesCurrentWeather } from '../../state/weather.selectors'

describe('CitiesListComponent', () => {
  let component: CitiesListComponent
  let fixture: ComponentFixture<CitiesListComponent>
  let el: DebugElement
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule],
      declarations: [CitiesListComponent, SortByNamePipe, CityCardComponent],
      providers: [
        provideMockStore<IWeatherState>({
          initialState: initialWeatherState,
          selectors: [{ selector: selectCitiesCurrentWeather, value: null }],
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(CitiesListComponent)
    component = fixture.componentInstance
    el = fixture.debugElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the cities list', () => {
    selectCitiesCurrentWeather.setResult(citiesMock)

    store.refreshState()
    fixture.detectChanges()

    const cards = el.queryAll(By.css('.city-card'))

    expect(cards).toBeTruthy('Could not find any city')
    expect(cards.length).toBe(5, 'Unexpected number of cities')
  })

  it('should display the first city ordered by name correctly', () => {
    selectCitiesCurrentWeather.setResult(citiesMock)

    let city = citiesMock['2759794'] // Amsterdam

    store.refreshState()
    fixture.detectChanges()

    const card = el.query(By.css('.cards-container:first-child')),
      name = card.query(By.css('.city-card h1'))

    expect(card).toBeTruthy('Could not find city card')
    expect(name.nativeElement.textContent).toBe(city.cityName)
  })

  it('should not display London (smaller id) as the first city', () => {
    selectCitiesCurrentWeather.setResult(citiesMock)

    let city = Object.values(citiesMock)[0] // London

    store.refreshState()
    fixture.detectChanges()

    const card = el.query(By.css('.cards-container:first-child')),
      name = card.query(By.css('.city-card h1'))

    expect(card).toBeTruthy('Could not find city card')
    expect(name.nativeElement.textContent).not.toBe(city.cityName)
  })

  it("should not show grid-container if there isn't cities", () => {
    store.refreshState()
    fixture.detectChanges()

    const grid = el.query(By.css('.grid-container'))

    expect(grid).toBeNull()
  })
})
