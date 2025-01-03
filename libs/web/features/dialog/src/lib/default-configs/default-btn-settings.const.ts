import { DialogBtnSetting, DialogEvent } from '../models';

export const DefaultEnterSetting: DialogBtnSetting[] = [{ type: DialogEvent.Enter, displayName: 'Enter' }];
export const DefaultCloseSetting: DialogBtnSetting[] = [{ type: DialogEvent.Cancel, displayName: 'Close' }];

export const DefaultEnterCloseSetting: DialogBtnSetting[] = [
  ...DefaultEnterSetting,
  ...DefaultCloseSetting
];
