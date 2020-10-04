import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TimelineUniDriver extends BaseUniDriver {
  getLabelText(): Promise<string>;
  getSuffixText(): Promise<string>;
}
