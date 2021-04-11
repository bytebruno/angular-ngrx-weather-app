import { Pipe, PipeTransform } from '@angular/core'

import { IWeather } from '../model/iweather'
import { KeyValue } from '@angular/common'

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(
    array: KeyValue<string, IWeather>[],
    ...args: unknown[]
  ): KeyValue<string, IWeather>[] {
    array.sort((a: KeyValue<string, IWeather>, b: KeyValue<string, IWeather>) => {
      if (a.value.cityName < b.value.cityName) {
        return -1
      } else if (a.value.cityName > b.value.cityName) {
        return 1
      } else {
        return 0
      }
    })
    return array
  }
}
