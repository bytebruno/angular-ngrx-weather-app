export interface ICurrentWeather {
  cityImageSrc: string
  cityName: string
  coordinates: {
    lat: string
    lon: string
  }
  country: string
  currentDt?: Date
  icon: string
  id: number
  nextHours?: []
  temperature: number
  windSpeed?: string
}
