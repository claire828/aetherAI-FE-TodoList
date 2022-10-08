import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends object, K extends keyof T , V extends string > implements PipeTransform {
  transform(arr: T[], findKey: K, findValue:V ): T[] {
    if (!arr) return[];

    const afterFilter = arr.reduce((result, x)=> {
      const gudard = x[findKey] as unknown;
       if( typeof gudard === 'string'){
        const include = gudard.includes(findValue);
        if(include) result.push(x);
       }
       return result;
    }, [] as T[])

    return afterFilter;
  }


}
