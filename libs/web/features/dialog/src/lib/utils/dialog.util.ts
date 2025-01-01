import { Observer } from 'rxjs';
import { DialogConfig, DialogBtnDisplay, DialogCategory, DialogEvent } from '../models';
import { Type } from '@angular/core';

export function generateDialogConfig<T>(
  title: string,
  content: string | Type<T>,
  observer: Observer<DialogEvent>,
  category: DialogCategory = DialogCategory.Default,
  btnDisplay: DialogBtnDisplay = DialogBtnDisplay.EnterOnly
): DialogConfig {
  return {
    name: 'dialog',
    title,
    content,
    category,
    btnDisplay,
    observer,
  };
}
