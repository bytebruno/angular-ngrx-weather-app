import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class OpenWeatherService {
  constructor(private http: HttpClient) {}

  getCityCurrentWeather(cityId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/weather?id=${cityId}&units=metric&appid=${environment.appId}`
    )
  }

  getCityCompleteWeather(lat: string, lon: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${environment.appId}`
    )
  }
}
