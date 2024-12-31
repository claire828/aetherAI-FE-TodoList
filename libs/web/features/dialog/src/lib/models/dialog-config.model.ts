import { Observer } from "rxjs";
import { DialogBtnDisplay } from "./dialog-btn-display.enum";
import { DialogCategory } from "./dialog-category.enum";
import { DialogEvent } from "./dialog-event.enum";
import { Type } from "@angular/core";

export interface DialogConfig<T = unknown> {
  name: string,
  category: DialogCategory,
  btnDisplay: DialogBtnDisplay,
  title: string,
  content: string | Type<T>, // 還沒用到
  observer: Observer<DialogEvent>
}