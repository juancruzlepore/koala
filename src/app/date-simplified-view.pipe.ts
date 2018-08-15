import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSimplifiedView'
})
export class DateSimplifiedViewPipe implements PipeTransform {

  transform(value: Date, args?: any): String {
    if(value == null){
      return "Loading..."
    }
    if(value.getFullYear() > 1970) {
      return (value.getFullYear() - 1970) + " años"
    } else if(value.getMonth() > 0) {
      return value.getMonth() + " meses";
    } else if(value.getDate() > 0) {
      return value.getDate() + " días";
    } else if(value.getHours() > 0) {
      return value.getHours() + " horitas";
    } else if(value.getMinutes() > 0) {
      return value.getMinutes() + " minutitos :)";
    }
    return "casi nada :D";
  }

}
