import { createReducer, on } from '@ngrx/store'

import { ICurrentWeather } from '../model/icurrent-weather'
import { getCityCurrentWeatherSuccess } from './weather.actions'

export interface IWeatherState {
  cities: {
    [key: string]: ICurrentWeather
  }
}

// Initial state for the 5 european cities
export const initialWeatherState: IWeatherState = {
  cities: {
    2759794: {
      id: 2759794,
      cityName: 'Amsterdam',
      country: 'Netherlands',
      cityImageSrc: 'city-amsterdam.jpg',
      icon: 'wi wi-cloud',
    },
    2925533: {
      id: 2925533,
      cityName: 'Frankfurt',
      country: 'Germany',
      cityImageSrc: 'city-frankfurt.jpg',
      icon: 'wi wi-cloud',
    },
    2643743: {
      id: 2643743,
      cityName: 'London',
      country: 'England',
      cityImageSrc: 'city-london.jpg',
      icon: 'wi wi-cloud',
    },
    2988507: {
      id: 2988507,
      cityName: 'Paris',
      country: 'France',
      cityImageSrc: 'city-paris.jpg',
      icon: 'wi wi-cloud',
    },
    3169070: {
      id: 3169070,
      cityName: 'Rome',
      country: 'Italy',
      cityImageSrc: 'city-rome.jpg',
      icon: 'wi wi-cloud',
    },
  },
}

export const weatherReducer = createReducer(
  initialWeatherState,
  on(getCityCurrentWeatherSuccess, (state: IWeatherState, action) => ({
    ...state,
    cities: {
      ...state.cities,
      [action.cityCurrentWeather.id]: {
        ...state.cities[action.cityCurrentWeather.id],
        ...action.cityCurrentWeather,
      },
    },
  }))
)
