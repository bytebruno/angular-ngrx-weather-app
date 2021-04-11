export const getWeatherIcon = (weatherCondition: any): string => {
  switch (weatherCondition.main) {
    case 'Thunderstorm':
      return 'wi wi-thunderstorm'
    case 'Drizzle':
      return 'wi wi-sprinkle'
    case 'Rain':
      return 'wi wi-rain'
    case 'Snow':
      return 'wi wi-snow'
    case 'Clear':
      if (weatherCondition.icon === '01d') return 'wi wi-day-sunny'
      else return 'wi wi-night-clear'
    case 'Clouds':
      return 'wi wi-cloudy'
    default:
      return 'wi wi-dust'
  }
}
