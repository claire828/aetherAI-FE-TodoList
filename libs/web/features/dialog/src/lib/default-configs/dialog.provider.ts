import { InjectionToken } from "@angular/core";
import { DialogConfig } from "../models";

export const DIALOG_PROVIDER = new InjectionToken<DialogConfig>('DIALOG_CONFIG_PROVIDER');
