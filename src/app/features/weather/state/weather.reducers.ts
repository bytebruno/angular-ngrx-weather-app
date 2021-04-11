import { createReducer, on } from '@ngrx/store'

import { ICurrentWeather } from '../model/icurrent-weather'
import { getCityCurrentWeatherSuccess } from './weather.actions'

export interface IWeatherState {
  cities: {
    [key: string]: ICurrentWeather
  }
}

// Initial state for the 5 european cities
const initialWeatherState: IWeatherState = {
  cities: {
    2759794: {
      id: 2759794,
      cityName: 'Amsterdam',
      country: 'Netherlands',
      cityImageSrc: 'city-amsterdam.jpg',
      icon: 'wi wi-cloud',
      temperature: 0,
      coordinates: {
        lat: '52.374',
        lon: '4.8897',
      },
    },
    2925533: {
      id: 2925533,
      cityName: 'Frankfurt',
      country: 'Germany',
      cityImageSrc: 'city-frankfurt.jpg',
      icon: 'wi wi-cloud',
      temperature: 0,
      coordinates: {
        lat: '50.1167',
        lon: '8.6833',
      },
    },
    2643743: {
      id: 2643743,
      cityName: 'London',
      country: 'England',
      cityImageSrc: 'city-london.jpg',
      icon: 'wi wi-cloud',
      temperature: 0,
      coordinates: {
        lat: '51.5085',
        lon: '-0.1257',
      },
    },
    2988507: {
      id: 2988507,
      cityName: 'Paris',
      country: 'France',
      cityImageSrc: 'city-paris.jpg',
      icon: 'wi wi-cloud',
      temperature: 0,
      coordinates: {
        lat: '48.8534',
        lon: '2.3488',
      },
    },
    3169070: {
      id: 3169070,
      cityName: 'Rome',
      country: 'Italy',
      cityImageSrc: 'city-rome.jpg',
      icon: 'wi wi-cloud',
      temperature: 0,
      coordinates: {
        lat: '41.8947',
        lon: '12.4839',
      },
    },
  },
}

export const weatherReducer = createReducer(
  initialWeatherState,
  on(getCityCurrentWeatherSuccess, (state: IWeatherState, action) => {
    return {
      ...state,
      cities: {
        ...state.cities,
        [action.cityCurrentWeather.id]: {
          ...state.cities[action.cityCurrentWeather.id],
          ...action.cityCurrentWeather,
        },
      },
    }
  })
)
