import { IHourly, IWeather } from '../model/iweather'

import { IOpenWeatherHourlyHourly } from '../model/open-weather/iopen-weather-hourly'
import { getWeatherIcon } from './weather-icon-util'

const UNIX_TIMESTAMP_MULTIPLIER_FACTOR = 1000

export const normalizeCurrentWeatherFieds = (cityWeather: any): IWeather => {
  let weather: IWeather = { ...cityWeather }

  weather.icon = getWeatherIcon(cityWeather.weather[0])
  weather.temperature = Math.round(cityWeather.main.temp)
  weather.windSpeed = Math.round(cityWeather.wind.speed).toString()
  weather.currentDt = new Date(cityWeather.dt * 1000)

  return weather
}

export const normalizeCompleteWeatherFieds = (
  cityId: number,
  cityWeather: any
): IWeather => {
  let weather: IWeather = { ...cityWeather }

  weather.id = cityId
  weather.nextHours = []

  cityWeather.hourly.splice(1, 6).map((hourly: IOpenWeatherHourlyHourly) => {
    let normalizedHourly: IHourly = {
      hour: new Date(hourly.dt * UNIX_TIMESTAMP_MULTIPLIER_FACTOR).toString(),
      icon: getWeatherIcon(hourly.weather[0]),
      condition: hourly.weather[0].main,
      temperature: hourly.temp,
      dt: hourly.dt,
    }
    weather.nextHours.push(normalizedHourly)
  })

  weather.icon = getWeatherIcon(cityWeather.current.weather[0])
  weather.temperature = Math.round(cityWeather.current.temp)
  weather.windSpeed = Math.round(cityWeather.current.wind_speed).toString()
  weather.currentDt = new Date(cityWeather.current.dt * UNIX_TIMESTAMP_MULTIPLIER_FACTOR)

  return weather
}
