import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heart'
})
export class HeartPipe implements PipeTransform {

  transform(value = ''): string {
    return value.concat('❤	❤	❤');
  }

}
