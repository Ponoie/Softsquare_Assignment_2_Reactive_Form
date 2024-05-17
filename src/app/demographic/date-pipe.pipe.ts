import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true
})
export class DatePipePipe implements PipeTransform {

  private datePipe: DatePipe = new DatePipe('en-US');

  transform(value: any, format: string = 'short'): any {
    return this.datePipe.transform(value, format);
  }

}
