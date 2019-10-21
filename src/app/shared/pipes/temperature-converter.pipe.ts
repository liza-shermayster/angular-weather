import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number) {

    if (value && !isNaN(value)) {
      const tempareature = (value - 32) / 1.8;
      return tempareature.toFixed();
    }
    return;
  }

}
