import { NgModule } from '@angular/core';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { asSearchIcon } from './svg/search';
import { asSpinIcon } from './svg/spin';


@NgModule({
  providers: [provideSvgIcons([asSearchIcon,asSpinIcon])],
})
export class TodolistSharedUiIconModule {}
