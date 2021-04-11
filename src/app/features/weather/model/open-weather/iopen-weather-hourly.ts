import { IOpenWeatherWeather } from './iopen-weather-weather'

export interface IOpenWeatherHourly {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: IOpenWeatherHourlyCurrent
  hourly: IOpenWeatherHourlyHourly[]
}

interface IOpenWeatherHourlyCurrent {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: IOpenWeatherWeather[]
}

export interface IOpenWeatherHourlyHourly {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: IOpenWeatherWeather[]
  pop: number
}
