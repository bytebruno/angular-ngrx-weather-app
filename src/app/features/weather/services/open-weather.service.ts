import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class OpenWeatherService {
  constructor(private http: HttpClient) {}

  getCityCurrentWeather(cityId: number): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/weather?id=${cityId}&units=metric&appid=${environment.appId}`
    )
  }
}
