import { createAction, props } from '@ngrx/store'

export const getCityCurrentWeatherRequest = createAction(
  '[Weather] Get One Product Request',
  props<{ cityId: number }>()
)
export const getCityCurrentWeatherSuccess = createAction(
  '[Weather] Get One Product Success',
  props<{ cityCurrentWeather: any }>()
)
