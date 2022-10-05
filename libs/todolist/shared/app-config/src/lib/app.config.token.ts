import { InjectionToken, ValueProvider } from '@angular/core';
import { AppConfig } from './app.config';

//需要拿到這份Config的話，就在建構式中inject它。 
export const APP_CONFIG = new InjectionToken<AppConfig>('todolist.config');


//ＤＩ注入要讓Module知道，因此創建一個provider 給 app.module
export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: value
});

