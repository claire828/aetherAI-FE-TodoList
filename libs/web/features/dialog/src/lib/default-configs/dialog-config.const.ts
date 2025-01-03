import { OverlayConfig } from "@angular/cdk/overlay";
import { DialogComponentConfig, DefaultDialogConfig, DialogBtnDisplay } from "../models";
import { WebFeatureMockComponent } from "../web-features-dialog/web-features-mock.component";

export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: ['bg-gray-500/30'],
  panelClass: [],
};

export const MOCK_CONFIG: DefaultDialogConfig = {
  name: 'Dialog Name',
  content: 'Dialog Content',
  btnDisplay: DialogBtnDisplay.EnterCancel,
  title: 'Dialog Default Title',
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}

export const MOCK_CONFIG2: DialogComponentConfig = {
  name: 'Dialog Name2',
  componentRef: () => WebFeatureMockComponent,
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
  data: {
    test: 'hello world'
  }
}
