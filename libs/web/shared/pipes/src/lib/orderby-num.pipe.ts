import { Pipe, PipeTransform } from '@angular/core';
import { orderByType } from './pipe-util';


@Pipe({
  name: 'orderbyNum'
})
export class OrderbyNumPipe<T extends object, K extends keyof T > implements PipeTransform {
  transform(arr: T[], fieldName: K, sortType:orderByType ): T[] {
    if (!arr) return[];
    return this.compare(arr,fieldName,sortType);
  }

  //sort by comparing number
  compare(arr: T[], fieldName: K, sortByDescending:orderByType):T[]{
    switch(sortByDescending){
      case 'decending':
        return [...arr].sort((a, b) => +b[fieldName] - +a[fieldName]);

      case 'ascending':
      return [...arr].sort((a, b) => +a[fieldName] - +b[fieldName]);

      case 'none':
      default:
        return arr;
    } 
  }

}
