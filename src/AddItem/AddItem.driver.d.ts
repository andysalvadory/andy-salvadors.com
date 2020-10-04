import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
export interface AddItemDriver<T> extends BaseDriver {
  element: () => T;
  getText: () => string;
  textExists: () => boolean;
  getTooltipDriver: () => void;
  getTooltipContent: () => string;
  click: () => void;
}
