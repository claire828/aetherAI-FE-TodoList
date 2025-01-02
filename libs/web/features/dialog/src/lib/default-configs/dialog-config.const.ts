import { OverlayConfig } from "@angular/cdk/overlay";
import { DialogComponentConfig } from "../models";
import { WebFeaturesDialogComponent } from "../web-features-dialog/web-features-dialog.component";

export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: ['bg-gray-500/30'],
  panelClass: [],
};

export const MOCK_CONFIG: DialogComponentConfig = {
  name: 'Dialog Name',
  componentRef: () => WebFeaturesDialogComponent,
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}

export const MOCK_CONFIG2: DialogComponentConfig = {
  name: 'Dialog Name2',
  componentRef: () => WebFeaturesDialogComponent,
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}
