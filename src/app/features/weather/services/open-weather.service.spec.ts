import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import {
  cityOpenWeatherCurrentResponseMock,
  cityOpenWeatherHourlyResponseMock,
} from '../utils/mocks/weather-mocks'

import { IOpenWeatherCurrent } from '../model/open-weather/iopen-weather-current'
import { IOpenWeatherHourly } from '../model/open-weather/iopen-weather-hourly'
import { OpenWeatherService } from './open-weather.service'
import { TestBed } from '@angular/core/testing'

describe('OpenweatherService', () => {
  let service: OpenWeatherService, httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService],
    })
    service = TestBed.inject(OpenWeatherService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should retrieve a city current weather by id', () => {
    service.getCityCurrentWeather('2759794').subscribe((city: IOpenWeatherCurrent) => {
      expect(city).toBeTruthy('No city returned')
      expect(city.id).toBe(2759794, 'incorrect id returned')
      expect(city.name).toBe('Amsterdam')
      expect(city.weather.length).toBeGreaterThan(0)
    })
    const req = httpTestingController.expectOne(
      'http://api.openweathermap.org/data/2.5//weather?id=2759794&units=metric&appid=06b3264682cd9bafa254a54db3bb487d'
    )
    expect(req.request.method).toEqual('GET')
    req.flush(cityOpenWeatherCurrentResponseMock)
  })

  it('should retrieve a city hourly weather by lat and lon', () => {
    service
      .getCityCompleteWeather('52.374', '4.8897')
      .subscribe((city: IOpenWeatherHourly) => {
        expect(city.current).not.toBeUndefined('No current weather returned')
        expect(city.hourly.length).toBeGreaterThan(0)
        expect(city.timezone).toBe('Europe/Amsterdam')
      })
    const req = httpTestingController.expectOne(
      'http://api.openweathermap.org/data/2.5//onecall?lat=52.374&lon=4.8897&exclude=minutely,daily,alerts&units=metric&appid=06b3264682cd9bafa254a54db3bb487d'
    )
    expect(req.request.method).toEqual('GET')
    req.flush(cityOpenWeatherHourlyResponseMock)
  })

  afterEach(() => {
    httpTestingController.verify()
  })
})
