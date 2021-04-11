import { HttpClient } from '@angular/common/http'
import { IOpenWeatherCurrent } from '../model/open-weather/iopen-weather-current'
import { IOpenWeatherHourly } from '../model/open-weather/iopen-weather-hourly'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class OpenWeatherService {
  constructor(private http: HttpClient) {}

  getCityCurrentWeather(cityId: string): Observable<IOpenWeatherCurrent> {
    return this.http.get<IOpenWeatherCurrent>(
      `${environment.apiUrl}/weather?id=${cityId}&units=metric&appid=${environment.appId}`
    )
  }

  getCityCompleteWeather(lat: string, lon: string): Observable<IOpenWeatherHourly> {
    return this.http.get<IOpenWeatherHourly>(
      `${environment.apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${environment.appId}`
    )
  }
}
