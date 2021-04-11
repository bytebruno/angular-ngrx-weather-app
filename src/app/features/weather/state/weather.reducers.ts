import { createReducer, on } from '@ngrx/store'

import { IWeather } from '../model/iweather'
import { getCityWeatherSuccess } from './weather.actions'

export interface IWeatherState {
  cities: {
    [key: string]: IWeather
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
      nextHours: [],
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
      nextHours: [],
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
      nextHours: [],
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
      nextHours: [],
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
      nextHours: [],
    },
  },
}

export const weatherReducer = createReducer(
  initialWeatherState,
  on(getCityWeatherSuccess, (state: IWeatherState, action) => {
    return {
      ...state,
      cities: {
        ...state.cities,
        [action.cityWeather.id]: {
          ...state.cities[action.cityWeather.id],
          ...action.cityWeather,
        },
      },
    }
  })
)
