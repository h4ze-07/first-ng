// USELESS PIPE
// CREATED ONLY TO LEARN FUNCTIONALITY


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeString',
  standalone: true
})
export class CapitalizeStringPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {
    if (value) {
        return value.toUpperCase();
    } else {
        return null;
    }
  }
}
