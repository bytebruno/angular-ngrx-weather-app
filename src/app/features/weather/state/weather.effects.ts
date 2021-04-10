import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import {
  getCityCurrentWeatherRequest,
  getCityCurrentWeatherSuccess,
} from './weather.actions'

import { EMPTY } from 'rxjs'
import { Injectable } from '@angular/core'
import { OpenWeatherService } from '../services/open-weather.service'
import { Router } from '@angular/router'

@Injectable()
export class WeatherEffects {
  getOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCityCurrentWeatherRequest),
      mergeMap((action) =>
        this.openWeatherService.getCityCurrentWeather(action.cityId).pipe(
          map((cityCurrentWeather: any) =>
            getCityCurrentWeatherSuccess({ cityCurrentWeather })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private openWeatherService: OpenWeatherService
  ) {}
}
