import { LinearProgressBarUniDriver as CoreLinearProgressBarUniDriver } from 'wix-ui-core/drivers/unidriver';
import { tooltipDriverFactory } from 'wix-ui-core/drivers/unidriver';

export interface LinearProgressBarUniDriver
  extends CoreLinearProgressBarUniDriver {
  isTooltipShown: () => Promise<boolean>;
  getTooltip: () => ReturnType<typeof tooltipDriverFactory>;
  isErrorIconShown: () => Promise<boolean>;
  isSuccessIconShown: () => Promise<boolean>;
  getTooltipErrorMessage: () => Promise<string>;
}
