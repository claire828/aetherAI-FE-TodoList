import { OverlayConfig } from '@angular/cdk/overlay';
import { DialogBtnDisplay } from './dialog-btn-display.enum';
import { DialogCategory } from './dialog-category.enum';
import { Type } from '@angular/core';

export interface DialogConfig<T = unknown> {
  name: string;
  category: DialogCategory;
  btnDisplay: DialogBtnDisplay;
  title: string;
  content: string | Type<T>; // TODO: 還沒用到
  overlayConfig: OverlayConfig;
}
