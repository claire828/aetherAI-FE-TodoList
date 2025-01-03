
import { ComponentType } from '@angular/cdk/portal';
import { DialogBtnDisplay } from './dialog-btn-display.enum';
import { OverlayConfig } from '@angular/cdk/overlay';

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
  content: string;
  btnDisplay: DialogBtnDisplay;
  title: string;
  overlayConfig: OverlayConfig;
};


/**
 * Represents the configuration type for a dialog.
 * It can be either a `DialogComponentConfig` or a `DefaultDialogConfig`.
 */
export type DialogType = DialogComponentConfig | DefaultDialogConfig;
