import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface ErrorIndicatorUniDriver extends BaseUniDriver {
  isShown: () => Promise<boolean>;
  mouseEnter: () => Promise<void>;
  getErrorMessage: () => Promise<string>;
}
