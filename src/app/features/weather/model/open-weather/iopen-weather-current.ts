import { IOpenWeatherWeather } from './iopen-weather-weather'

export interface IOpenWeatherCurrent {
  coord: { lat: string; lon: string }
  weather: IOpenWeatherWeather[]
  base: string
  main: IOpenWeatherCurrentMain
  visibility: string
  wind: IOpenWeatherCurrentWind
  clouds: IOpenWeatherCurrentClouds
  dt: number
  sys: IOpenWeatherCurrentSys
  timezone: number
  id: number
  name: string
  cod: number
}

interface IOpenWeatherCurrentMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface IOpenWeatherCurrentWind {
  speed: number
  deg: number
}

interface IOpenWeatherCurrentClouds {
  all: number
}

interface IOpenWeatherCurrentSys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}
