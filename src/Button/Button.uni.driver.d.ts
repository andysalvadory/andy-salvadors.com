import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { ButtonSize } from './index';

export interface ButtonUniDriver extends BaseUniDriver {
  getButtonTextContent: () => Promise<string>;
  isButtonDisabled: () => Promise<boolean>;
  isFocused: () => Promise<boolean>;
  hasSkin: (skinName: ButtonSize) => Promise<boolean>;
}
