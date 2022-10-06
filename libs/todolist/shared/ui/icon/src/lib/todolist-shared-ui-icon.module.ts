import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { asSearchIcon } from './svg/search';

@NgModule({
  imports: [CommonModule,
    SvgIconsModule.forRoot({
      icons:[asSearchIcon]
    })
  ],
  exports: [SvgIconsModule]
})
export class TodolistSharedUiIconModule {}
