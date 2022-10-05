import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { TimingFormatPipe } from './timing-format.pipe';
import { EnumToArrayPipe } from './enum-to-array.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe
  ],
  exports: [
    NumberWithCommasPipe,
    TimingFormatPipe,
    EnumToArrayPipe
  ],
})
export class WebSharedPipesModule {}
