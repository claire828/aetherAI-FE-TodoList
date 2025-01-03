
import { ComponentType } from '@angular/cdk/portal';
import { DialogBtnDisplay } from './dialog-btn-display.enum';
import { OverlayConfig } from '@angular/cdk/overlay';
import { Provider, StaticProvider } from '@angular/core';


export interface DialogComponentConfig<T = unknown, D = unknown> {
  name: string;
  componentRef: () => ComponentType<T>;
  overlayConfig: OverlayConfig;
  data?: D;
}


export interface DefaultDialogConfig {
  name: string;
  content: string;
  btnDisplay: DialogBtnDisplay;
  title: string;
  overlayConfig: OverlayConfig;
};


export type DialogType = DialogComponentConfig | DefaultDialogConfig;
export type ProviderTypes = Array<Provider | StaticProvider>;
