import { InjectionToken } from "@angular/core";
import { DefaultDialogConfig, DialogComponentConfig } from "../models";

export const DIALOG_DEFAULT_PROVIDER = new InjectionToken<DefaultDialogConfig>('DIALOG_DEFAULT_PROVIDER');
export const DIALOG_COMPONENT_PROVIDER = new InjectionToken<DialogComponentConfig>('DIALOG_COMPONENT_PROVIDER');
