import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface WarningIndicatorUniDriver extends BaseUniDriver {
  isShown: () => Promise<boolean>,
  mouseEnter: () => Promise<any>,
  getWarningMessage: () => Promise<string | null>,
}
