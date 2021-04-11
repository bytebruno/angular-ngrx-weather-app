import { createFeatureSelector, createSelector } from '@ngrx/store'

import { IWeatherState } from './weather.reducers'

export const weatherFeatureKey = 'weather'

export const selectWeatherFeature = createFeatureSelector<IWeatherState>(
  weatherFeatureKey
)
export const selectCitiesCurrentWeather = createSelector(
  selectWeatherFeature,
  (state: IWeatherState) => state.cities
)
export const selectCityCurrentWeather = createSelector(
  selectWeatherFeature,
  (state: IWeatherState, cityId: number) => state.cities[cityId]
)
