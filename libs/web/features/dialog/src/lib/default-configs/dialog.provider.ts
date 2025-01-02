import { InjectionToken } from "@angular/core";
import { DialogComponentConfig } from "../models";

export const DIALOG_PROVIDER = new InjectionToken<DialogComponentConfig>('DIALOG_CONFIG_PROVIDER');
