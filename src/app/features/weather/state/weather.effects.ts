import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, merge } from 'rxjs'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import {
  getAllCitiesCurrentWeatherRequest,
  getCityCompleteWeatherRequest,
  getCityWeatherSuccess,
} from './weather.actions'
import {
  normalizeCompleteWeatherFieds,
  normalizeCurrentWeatherFieds,
} from '../utils/normalize-util'

import { IOpenWeatherCurrent } from '../model/open-weather/iopen-weather-current'
import { IOpenWeatherHourly } from '../model/open-weather/iopen-weather-hourly'
import { Injectable } from '@angular/core'
import { OpenWeatherService } from '../services/open-weather.service'
import { Store } from '@ngrx/store'

@Injectable()
export class WeatherEffects {
  getAllCitiesCurrentWeatherRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCitiesCurrentWeatherRequest),
      withLatestFrom(this.store$),
      switchMap(([action, store]) => {
        let citiesIds = Object.keys(store.weather.cities)
        return merge(
          ...citiesIds.map((cityId) =>
            this.openWeatherService.getCityCurrentWeather(cityId).pipe(
              map((cityWeather: IOpenWeatherCurrent) => {
                const normalizedData = normalizeCurrentWeatherFieds(cityWeather)
                return getCityWeatherSuccess({
                  cityWeather: normalizedData,
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
          map((cityWeather: IOpenWeatherHourly) => {
            const normalizedData = normalizeCompleteWeatherFieds(
              action.cityId,
              cityWeather
            )
            return getCityWeatherSuccess({ cityWeather: normalizedData })
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService,
    private store$: Store<any>
  ) {}
}
