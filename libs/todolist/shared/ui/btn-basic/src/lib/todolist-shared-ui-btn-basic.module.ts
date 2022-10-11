import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBasicComponent } from './btn-basic/btn-basic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BtnBasicComponent],
  exports: [BtnBasicComponent],
})
export class TodolistSharedUiBtnBasicModule {}
