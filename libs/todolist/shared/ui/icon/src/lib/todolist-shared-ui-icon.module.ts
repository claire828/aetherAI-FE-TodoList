import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { asSearchIcon } from './svg/search';
import { asSpinIcon } from './svg/spin';

@NgModule({
  imports: [CommonModule,
    SvgIconsModule.forRoot({
      icons:[asSearchIcon,asSpinIcon]
    })
  ],
  exports: [SvgIconsModule]
})
export class TodolistSharedUiIconModule {}
