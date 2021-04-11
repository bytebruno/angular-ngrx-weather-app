import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { OpenWeatherService } from './open-weather.service'
import { TestBed } from '@angular/core/testing'

describe('OpenweatherService', () => {
  let service: OpenWeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService],
    })
    service = TestBed.inject(OpenWeatherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
