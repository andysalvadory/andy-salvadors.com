import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const checkToggleDriverFactory = (base, body) => {
  const getTooltipDriver = () =>
    tooltipDriverFactory(base.$(`[data-hook="${dataHooks.tooltip}"]`), body);

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the current count */
    isChecked: () =>
      base.$(`[data-hook="${dataHooks.toggle}"]`)._prop('checked'),

    /** Click the check toggle */
    click: async () => {
      const input = await base.$(`[data-hook="${dataHooks.toggle}"]`);

      // eslint-disable-next-line no-restricted-properties
      const isDisabled = await input._prop('disabled');

      // In order to simulate a real user event, we need to check if the input is disabled before clicking.
      if (!isDisabled) await input.click();
    },

    /** Get the tooltip content, throws an error if content is not provided */
    getTooltipContent: async () => {
      const tooltipDriver = getTooltipDriver();
      if (await tooltipDriver.exists()) {
        await tooltipDriver.mouseEnter();
        return await tooltipDriver.getTooltipText();
      } else {
        throw new Error(`Message was not provided`);
      }
    },
  };
};
