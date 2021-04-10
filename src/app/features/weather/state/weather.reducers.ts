import { createReducer, on } from '@ngrx/store'

import { getCityCurrentWeatherSuccess } from './weather.actions'

export interface IWeatherState {
  cities: {
    [key: string]: {}
  }
}

export const initialWeatherState: IWeatherState = {
  cities: {},
}

export const weatherReducer = createReducer(
  initialWeatherState,
  on(getCityCurrentWeatherSuccess, (state: IWeatherState, action) => ({
    ...state,
    cities: {
      ...state.cities,
      [action.cityCurrentWeather.id]: action.cityCurrentWeather,
    },
  }))
)
