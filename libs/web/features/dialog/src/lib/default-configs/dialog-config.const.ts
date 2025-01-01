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
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}

export const MOCK_CONFIG2: DialogConfig = {
  name: 'Dialog Name2',
  category: DialogCategory.Default,
  btnDisplay: DialogBtnDisplay.EnterCancel,
  title: 'Dialog Title2',
  content: 'Dialog Content2',
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}
