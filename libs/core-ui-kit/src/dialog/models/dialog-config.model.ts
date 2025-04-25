import { ComponentType } from '@angular/cdk/portal';
import { OverlayConfig } from '@angular/cdk/overlay';
import { DialogEvent } from './dialog-event.enum';

export interface DialogComponentConfig<T = unknown, D = unknown> {
  injectorID: string;
  componentRef: () => ComponentType<T>;
  overlayConfig: OverlayConfig;
  autoClose?: boolean;
  data?: D;
}

export interface DefaultDialogConfig {
  injectorID: string;
  title: string;
  content?: string;
  contentComponent?: () => ComponentType<any>;
  contentClasses?: string;
  btns?: DialogBtnSetting[];
  overlayConfig: OverlayConfig;
  autoClose?: boolean;
}

export interface DialogBtnSetting {
  type: DialogEvent;
  displayName: string;
  classes?: string;
}

export type DialogType = DialogComponentConfig | DefaultDialogConfig;
