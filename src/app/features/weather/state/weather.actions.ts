import { createAction, props } from '@ngrx/store'

export const getAllCitiesCurrentWeatherRequest = createAction(
  '[Weather] Get All Cities Current Weather Request'
)

export const getCityCompleteWeatherRequest = createAction(
  '[Weather] Get City Complete Weather Request',
  props<{ cityId: number; lat: string; lon: string }>()
)

export const getCityWeatherSuccess = createAction(
  '[Weather] Get City Weather Success',
  props<{ cityWeather: any }>()
)
