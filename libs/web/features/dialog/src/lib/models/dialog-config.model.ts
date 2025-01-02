
import { ComponentType } from '@angular/cdk/portal';
import { DialogBtnDisplay } from './dialog-btn-display.enum';
import { DialogCategory } from './dialog-category.enum';
import { OverlayConfig } from '@angular/cdk/overlay';
import { Provider, StaticProvider } from '@angular/core';


export interface DialogComponentConfig<T = unknown> {
  name: string;
  componentRef: () => ComponentType<T>;
  overlayConfig: OverlayConfig;
}


export interface DefaultDialogConfig {
  name: string;
  category: DialogCategory;
  btnDisplay: DialogBtnDisplay;
  title: string;
  overlayConfig: OverlayConfig;
};


export type DialogType = DialogComponentConfig | DefaultDialogConfig;
export type ProviderTypes = Array<Provider | StaticProvider>;
