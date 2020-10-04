import {
  CircularProgressBarUniDriver as CircularProgressBarUniDriverCore,
  tooltipDriverFactory,
} from 'wix-ui-core/drivers/unidriver';
import { CircularProgressBarSize } from './index';

export interface CircularProgressBarUniDriver
  extends CircularProgressBarUniDriverCore {
  isTooltipShown: () => Promise<boolean>;
  getTooltip: () => ReturnType<typeof tooltipDriverFactory>;
  isErrorIconShown: () => Promise<boolean>;
  isSuccessIconShown: () => Promise<boolean>;
  getSize: () => Promise<CircularProgressBarSize>;
  getTooltipErrorMessage: () => Promise<any>;
}
