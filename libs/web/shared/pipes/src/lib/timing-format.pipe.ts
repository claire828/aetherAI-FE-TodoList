import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timingFormat',
})
export class TimingFormatPipe implements PipeTransform {
  transform(time: number): string {
    if (!time) return '00:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}}`;
  }

  private initZero(time: number): string {
    return time < 10 ? '0' : '';
  }
}
