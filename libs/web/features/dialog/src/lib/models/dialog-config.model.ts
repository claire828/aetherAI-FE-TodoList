
import { ComponentType } from '@angular/cdk/portal';
import { OverlayConfig } from '@angular/cdk/overlay';
import { DialogEvent } from './dialog-event.enum';

/**
 * Configuration interface for a dialog component.
 *
 * @template T - The type of the component.
 * @template D - The type of the data passed to the component.
 */
export interface DialogComponentConfig<T = unknown, D = unknown> {
  name: string;
  componentRef: () => ComponentType<T>;
  overlayConfig: OverlayConfig;
  data?: D;
}


export interface DefaultDialogConfig {
  name: string;
  title: string;
  content: string;
  btns: DialogBtnSetting[],
  overlayConfig: OverlayConfig;
};


export interface DialogBtnSetting {
  type: DialogEvent;
  displayName: string;
  classes?: string | string[] | Set<string> | { [className: string]: any };
}


/**
 * Represents the configuration type for a dialog.
 * It can be either a `DialogComponentConfig` or a `DefaultDialogConfig`.
 */
export type DialogType = DialogComponentConfig | DefaultDialogConfig;
