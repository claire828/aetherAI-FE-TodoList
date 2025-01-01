import { DialogConfig, DialogBtnDisplay, DialogCategory } from '../models';
import { Type } from '@angular/core';

export function generateDialogConfig<T>(
  name: string,
  title: string,
  content: string | Type<T>,
  category: DialogCategory = DialogCategory.Default,
  btnDisplay: DialogBtnDisplay = DialogBtnDisplay.EnterOnly
): DialogConfig {
  return {
    name,
    title,
    content,
    category,
    btnDisplay,
  };
}
