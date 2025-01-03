import { InjectionToken } from "@angular/core";
import { DefaultDialogConfig, DialogComponentConfig } from "../models";

export const DIALOG_PROVIDER = new InjectionToken<DefaultDialogConfig>('DIALOG_PROVIDER');
export const DIALOG_COMPONENT_PROVIDER = new InjectionToken<DialogComponentConfig>('DIALOG_COMPONENT_PROVIDER');
