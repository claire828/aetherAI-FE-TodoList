
import { Pipe, PipeTransform } from '@angular/core';
import { orderByType } from './pipe-util';



@Pipe({
  name: 'orderbyAscii'
})
export class OrderbyAsciiPipe<T extends object, K extends keyof T > implements PipeTransform {
  transform(arr: T[], fieldName: K, sortType:orderByType ): T[] {
    if (!arr) return[];
    return this.compare(arr,fieldName,sortType);
  }

  compare(arr: T[], fieldName: K, sortByDescending:orderByType):T[]{
    switch(sortByDescending){
      case 'decending':
        return [...arr].sort((obj1,obj2)=>{
          if (obj1[fieldName] > obj2[fieldName]) return 1;
          if (obj1[fieldName] < obj2[fieldName]) return -1;
          return 0;
        });

      case 'ascending':
        return [...arr].sort((obj1,obj2)=>{
          if (obj1[fieldName] > obj2[fieldName]) return -1;
          if (obj1[fieldName] < obj2[fieldName]) return 1;
          return 0;
        });

      case 'none':
      default:
        return arr;
    }
  }


}
