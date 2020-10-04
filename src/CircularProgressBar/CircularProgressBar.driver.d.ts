import { CircularProgressBarDriver as CircularProgressBarDriverCore } from 'wix-ui-core/drivers/vanilla';
import { CircularProgressBarSize } from './index';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';

export interface CircularProgressBarDriver extends CircularProgressBarDriverCore {
  isTooltipShown: () => boolean;
  getTooltip: () => ReturnType<typeof tooltipDriverFactory>;
  isErrorIconShown: () => boolean;
  isSuccessIconShown: () => boolean;
  getSize: () => CircularProgressBarSize;
  getTooltipErrorMessage: () => Promise<string>;
}
