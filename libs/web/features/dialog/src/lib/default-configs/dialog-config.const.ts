import { OverlayConfig } from "@angular/cdk/overlay";
import { DialogBtnDisplay, DialogCategory, DialogConfig } from "../models";

export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: ['bg-gray-500/30'],
  panelClass: [],
};


export const MOCK_CONFIG: DialogConfig = {
  name: 'Dialog Name',
  category: DialogCategory.Default,
  btnDisplay: DialogBtnDisplay.EnterCancel,
  title: 'Dialog Title',
  content: 'Dialog Content',
  observer: {
    next: () => { },
    error: () => { },
    complete: () => { },
  },
}
