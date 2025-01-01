import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { TimingFormatPipe } from './timing-format.pipe';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';
import { OrderbyNumPipe } from './orderby-num.pipe';
import { OrderbyAsciiPipe } from './orderby-ascii.pipe';

@NgModule({
  imports: [
    CommonModule,
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe,
    ReversePipe,
    FilterPipe,
    OrderbyNumPipe,
    OrderbyAsciiPipe,
  ],
  exports: [
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe,
    ReversePipe,
    FilterPipe,
    OrderbyNumPipe,
    OrderbyAsciiPipe,
  ],
})
export class WebSharedPipesModule {}
