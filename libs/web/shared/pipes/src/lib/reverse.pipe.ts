import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe<T> implements PipeTransform {

  transform(value: T[], reverse:boolean): unknown {
    if (!value) return;
    return reverse ? [...value].reverse() : value;
  }

}
