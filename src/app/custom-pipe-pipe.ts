import { Pipe, PipeTransform } from '@angular/core';
import jsonData from './data.json';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  // transform(obj: any, key: any): any {
  //   if (obj && key in obj) {
  //     return `${obj[key]}`;
  //   }
  // }
  obj: { [key: string]: string } = jsonData;
  transform(value: any) {
    if (jsonData && value in jsonData) {
      return `${this.obj[value]}`;
    } else {
      return `no data found`;
    }
  }
}
