import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe<T extends object, V> implements PipeTransform {
  transform(data: T): { key: string; value: V }[] {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const result = [];
    for (let i = 0; i < keys.length; i++) {
      result.push({
        key: keys[i],
        value: values[i],
      });
    }
    return result;
  }
}
