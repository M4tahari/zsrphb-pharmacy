import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigInitialUsername'
})
export class BigInitialUsernamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let big_inital = (new String(value)).charAt(0).toUpperCase() + (new String(value)).slice(1)
    return big_inital
  }
}
