import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { TimingFormatPipe } from './timing-format.pipe';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe,
    ReversePipe,
    FilterPipe
  ],
  exports: [
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe,
    ReversePipe,
    FilterPipe
  ],
})
export class WebSharedPipesModule {}
