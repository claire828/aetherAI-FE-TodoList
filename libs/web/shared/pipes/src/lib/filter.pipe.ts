import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends object, K extends keyof T > implements PipeTransform {
  transform(arr: T[], fieldName: K, keyword:string ): T[] {
    if (!arr) return[];

    const afterFilter = arr.reduce((result, x)=> {
      const guard = x[fieldName] as unknown;
       if( typeof guard === 'string'){
        const include = guard.toLowerCase().includes(keyword.toLocaleLowerCase());
        if(include) result.push(x);
       }
       return result;
    }, [] as T[])

    return afterFilter;
  }


}
