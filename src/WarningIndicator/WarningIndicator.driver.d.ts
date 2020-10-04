import {BaseDriver} from 'wix-ui-test-utils/driver-factory';

export interface WarningIndicatorDriver extends BaseDriver {
  isShown: () => boolean,
  mouseEnter: () => any,
  getWarningMessage: () => string | null,
}
