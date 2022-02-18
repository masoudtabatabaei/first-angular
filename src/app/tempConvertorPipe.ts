import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "tempConvertor"
})
export class TempConvertorPipe implements PipeTransform {
  transform(value: number, unit:string) {
    if(value && !isNaN(value)){
      if (unit === "C") {
        // convert to Celsius
        let temperature = (value - 32) /1.8 ;
        return temperature.toFixed(2);
      } else {
        // convert to Fahrenheit
        let temperature = (value * 1.8) + 32;
        return temperature.toFixed(2);
      }
    }
    return;
  }
}