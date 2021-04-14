import 'moment-timezone'

import * as moment from 'moment'

import { IHourly, IWeather } from '../model/iweather'

import { IOpenWeatherHourlyHourly } from '../model/open-weather/iopen-weather-hourly'
import { getWeatherIcon } from './weather-icon-util'

const UNIX_TIMESTAMP_MULTIPLIER_FACTOR = 1000

export const normalizeCurrentWeatherFieds = (cityWeather: any): IWeather => {
  const weather: IWeather = { ...cityWeather }

  weather.icon = getWeatherIcon(cityWeather.weather[0])
  weather.temperature = Math.round(cityWeather.main.temp)
  weather.windSpeed = Math.round(cityWeather.wind.speed).toString()
  weather.currentDt = new Date(cityWeather.dt * UNIX_TIMESTAMP_MULTIPLIER_FACTOR)

  return weather
}

export const normalizeCompleteWeatherFieds = (
  cityId: number,
  cityWeather: any
): IWeather => {
  const weather: IWeather = { ...cityWeather }

  weather.id = cityId
  weather.nextHours = []

  const nowWithTimezone = moment(
    cityWeather.current.dt * UNIX_TIMESTAMP_MULTIPLIER_FACTOR
  ).tz(cityWeather.timezone)

  weather.icon = getWeatherIcon(cityWeather.current.weather[0])
  weather.temperature = Math.round(cityWeather.current.temp)
  weather.windSpeed = Math.round(cityWeather.current.wind_speed).toString()
  weather.currentDt = nowWithTimezone.toDate()

  const now: IHourly = {
    hour: nowWithTimezone.format('HH:mm') + ' - Now',
    icon: weather.icon,
    condition: cityWeather.current.weather[0].main,
    temperature: weather.temperature,
    dt: cityWeather.current.dt,
  }
  weather.nextHours.push(now)

  cityWeather.hourly.splice(1, 6).map((hourly: IOpenWeatherHourlyHourly) => {
    const normalizedHourly: IHourly = {
      hour: moment(hourly.dt * UNIX_TIMESTAMP_MULTIPLIER_FACTOR)
        .tz(cityWeather.timezone)
        .format('HH:mm'),
      icon: getWeatherIcon(hourly.weather[0]),
      condition: hourly.weather[0].main,
      temperature: Math.round(hourly.temp),
      dt: hourly.dt,
    }

    weather.nextHours.push(normalizedHourly)
  })

  return weather
}
