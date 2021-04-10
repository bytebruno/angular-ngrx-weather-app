import { createAction, props } from '@ngrx/store'

export const getCityCurrentWeatherRequest = createAction(
  '[Weather] Get City Current Weather Request',
  props<{ cityId: string }>()
)
export const getCityCurrentWeatherSuccess = createAction(
  '[Weather] Get City Current Weather Success',
  props<{ cityCurrentWeather: any }>()
)

export const getAllCitiesCurrentWeatherRequest = createAction(
  '[Weather] Get All Cities Current Weather Request'
)

export const getAllCitiesCurrentWeatherSuccess = createAction(
  '[Weather] Get All Cities Current Weather Success',
  props<{ cities: any }>()
)
