
import { DEFAULT_OVERLAY_CONFIG } from "../default-configs";
import { DialogComponentConfig, DefaultDialogConfig, DialogBtn } from "../models";
import { WebFeatureMockComponent } from "../web-features-mock/web-features-mock.component";

export const MOCK_CONFIG: DefaultDialogConfig = {
  name: 'a1',
  title: 'Dialog Default Title',
  content: 'Dialog Content',
  btns: [{ type: DialogBtn.Enter, displayName: 'Enter' }, { type: DialogBtn.Cancel, displayName: 'Close' }],
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
}

export const MOCK_CONFIG2: DialogComponentConfig = {
  name: 'a2',
  componentRef: () => WebFeatureMockComponent,
  overlayConfig: DEFAULT_OVERLAY_CONFIG,
  data: {
    test: 'hello world'
  }
}
