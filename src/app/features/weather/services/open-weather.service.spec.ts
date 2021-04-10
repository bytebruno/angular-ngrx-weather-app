import { OpenWeatherService } from './open-weather.service'
import { TestBed } from '@angular/core/testing'

describe('OpenweatherService', () => {
  let service: OpenWeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(OpenWeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
