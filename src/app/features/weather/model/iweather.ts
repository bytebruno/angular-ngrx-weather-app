export interface IWeather {
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
  nextHours: IHourly[]
  temperature: number
  windSpeed?: string
}

export interface IHourly {
  icon: string
  hour: string
  temperature: number
  condition: string
  dt: number
}
