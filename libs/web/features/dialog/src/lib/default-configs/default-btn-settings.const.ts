import { DialogBtn } from '../models';

export const DefaultEnterSetting = [{ type: DialogBtn.Enter, displayName: 'Enter' }];
export const DefaultCloseSetting = [{ type: DialogBtn.Cancel, displayName: 'Close' }];

export const DefaultEnterCloseSetting = [
  ...DefaultEnterSetting,
  ...DefaultCloseSetting
];
