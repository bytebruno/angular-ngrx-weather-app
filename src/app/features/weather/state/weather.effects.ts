import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, merge } from 'rxjs'
import { catchError, concatMap, map, switchMap, withLatestFrom } from 'rxjs/operators'
import {
  getAllCitiesCurrentWeatherRequest,
  getCityCompleteWeatherRequest,
  getCityCurrentWeatherRequest,
  getCityCurrentWeatherSuccess,
} from './weather.actions'

import { ContentObserver } from '@angular/cdk/observers'
import { ICurrentWeather } from '../model/icurrent-weather'
import { Injectable } from '@angular/core'
import { OpenWeatherService } from '../services/open-weather.service'
import { Store } from '@ngrx/store'
import { getWeatherIcon } from '../utils/weather-icon'

@Injectable()
export class WeatherEffects {
  getCityCurrentWeatherRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCityCurrentWeatherRequest),
      switchMap((action) =>
        this.openWeatherService.getCityCurrentWeather(action.cityId).pipe(
          map((cityCurrentWeather: any) => {
            cityCurrentWeather.icon = getWeatherIcon(cityCurrentWeather.weather[0])
            return getCityCurrentWeatherSuccess({ cityCurrentWeather })
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  getAllCitiesCurrentWeatherRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCitiesCurrentWeatherRequest),
      withLatestFrom(this.store$),
      switchMap(([action, store]) => {
        let citiesIds = Object.keys(store.weather.cities)
        return merge(
          ...citiesIds.map((cityId) =>
            this.openWeatherService.getCityCurrentWeather(cityId).pipe(
              map((cityCurrentWeather: any) => {
                const normalizedData = this.normalizeCurrentWeatherFieds(
                  cityCurrentWeather
                )
                return getCityCurrentWeatherSuccess({
                  cityCurrentWeather: normalizedData,
                })
              }),
              catchError(() => EMPTY)
            )
          )
        )
      })
    )
  )

  getCityCompleteWeatherRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCityCompleteWeatherRequest),
      switchMap((action) =>
        this.openWeatherService.getCityCompleteWeather(action.lat, action.lon).pipe(
          map((cityCurrentWeather: any) => {
            const normalizedData = this.normalizeCompleteWeatherFieds(
              action.cityId,
              cityCurrentWeather
            )
            return getCityCurrentWeatherSuccess({ cityCurrentWeather: normalizedData })
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  private normalizeCurrentWeatherFieds(cityWeather: any): ICurrentWeather {
    let normalizedCurrentWeather: ICurrentWeather = { ...cityWeather }

    normalizedCurrentWeather.icon = getWeatherIcon(cityWeather.weather[0])
    normalizedCurrentWeather.temperature = cityWeather.main.temp
    normalizedCurrentWeather.windSpeed = cityWeather.wind.speed
    normalizedCurrentWeather.currentDt = new Date(cityWeather.dt * 1000)

    return normalizedCurrentWeather
  }

  private normalizeCompleteWeatherFieds(
    cityId: number,
    cityWeather: any
  ): ICurrentWeather {
    let normalizedCurrentWeather: ICurrentWeather = { ...cityWeather }

    normalizedCurrentWeather.id = cityId
    normalizedCurrentWeather.nextHours = cityWeather.hourly.splice(1, 6)

    normalizedCurrentWeather.nextHours?.map((hourly: any) => {
      hourly.hour = new Date(hourly.dt * 1000)
      hourly.icon = getWeatherIcon(hourly.weather[0])
      hourly.condition = hourly.weather[0].main
      hourly.temperature = hourly.temp
    })

    normalizedCurrentWeather.icon = getWeatherIcon(cityWeather.current.weather[0])
    normalizedCurrentWeather.temperature = cityWeather.current.temp
    normalizedCurrentWeather.windSpeed = cityWeather.current.wind_speed
    normalizedCurrentWeather.currentDt = new Date(cityWeather.current.dt * 1000)

    return normalizedCurrentWeather
  }

  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService,
    private store$: Store<any>
  ) {}
}
