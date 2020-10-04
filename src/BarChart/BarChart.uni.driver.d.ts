import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BarChartUniDriver extends BaseUniDriver {
  getItemsCount(): Promise<number>;
  getValue(): Promise<string>;
  getValueInShort(): Promise<string>;
  getDescription(): Promise<string>;
  getDescriptionInfo(): Promise<string>;
}
