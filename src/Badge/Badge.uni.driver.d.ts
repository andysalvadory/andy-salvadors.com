import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { BadgeType, BadgeSkin, BadgeSize } from './index';

export interface BadgeUniDriver extends BaseUniDriver {
  getContent: () => Promise<string | null>,
  text: () => Promise<string>;
  getType: () => Promise<BadgeType>;
  getSkin: () => Promise<BadgeSkin>;
  getSize: () => Promise<BadgeSize>;
  isUppercase: () => Promise<boolean>;
  hasClickCursor:() => Promise<boolean>;
  getPrefixIcon: () => Promise<HTMLElement>,
  getSuffixIcon: () => Promise<HTMLElement>,
}
