import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, merge } from 'rxjs'
import { catchError, concatMap, map, switchMap, withLatestFrom } from 'rxjs/operators'
import {
  getAllCitiesCurrentWeatherRequest,
  getCityCurrentWeatherRequest,
  getCityCurrentWeatherSuccess,
} from './weather.actions'

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
      concatMap(([action, store]) => {
        let citiesIds = Object.keys(store.weather.cities)
        return merge(
          ...citiesIds.map((cityId) =>
            this.openWeatherService.getCityCurrentWeather(cityId).pipe(
              map((cityCurrentWeather: any) => {
                cityCurrentWeather.icon = getWeatherIcon(cityCurrentWeather.weather[0])
                return getCityCurrentWeatherSuccess({ cityCurrentWeather })
              }),
              catchError(() => EMPTY)
            )
          )
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService,
    private store$: Store<any>
  ) {}
}
