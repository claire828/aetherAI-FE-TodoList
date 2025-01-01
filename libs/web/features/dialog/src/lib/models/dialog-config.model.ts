
import { ComponentType } from '@angular/cdk/portal';
import { DialogBtnDisplay } from './dialog-btn-display.enum';
import { DialogCategory } from './dialog-category.enum';
import { OverlayConfig } from '@angular/cdk/overlay';


export interface DialogConfig<T = unknown> {
  name: string;
  category: DialogCategory;
  btnDisplay: DialogBtnDisplay;
  title: string;
  componentRef: () => ComponentType<T>;
  overlayConfig: OverlayConfig;
}
