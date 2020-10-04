import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';
import { reactUniDriver } from 'wix-ui-test-utils/vanilla';

export const formFieldUniDriverFactory = base => {
  const charactersCounter = () => base.$('[data-hook*="formfield-counter"]');

  return {
    ...baseUniDriverFactory(base),
    getChildren: async () => {
      const baseUniDriverElement = base.$('[data-hook*="formfield-children"]');
      return (await baseUniDriverElement.exists())
        ? baseUniDriverElement.getNative() // eslint-disable-line no-restricted-properties
        : null;
    },
    getLabel: async () => {
      const baseUniDriverElement = base.$('[data-hook*="formfield-label"]');
      return (await baseUniDriverElement.exists())
        ? baseUniDriverElement.getNative() // eslint-disable-line no-restricted-properties
        : null;
    },
    isRequired: async () =>
      base.$('[data-hook*="formfield-asterisk"]').exists(),
    getLengthLeft: async () => {
      const counter = charactersCounter();
      return (await counter.exists())
        ? parseInt(await counter._prop('innerHTML'), 10)
        : null;
    },
    isLengthExceeded: async () => {
      const counter = charactersCounter();
      if (await counter.exists()) {
        const length = parseInt(await counter._prop('innerHTML'), 10);
        return length < 0;
      }
      return false;
    },
    hasTooltip: async () => {
      const testkit = tooltipDriverFactory(
        base.$('[data-hook*="formfield-infotooltip"]'),
        reactUniDriver(document.body),
      );
      return await testkit.exists();
    },
    getInfoContent: async () => {
      const testkit = tooltipDriverFactory(
        base.$('[data-hook*="formfield-infotooltip"]'),
        reactUniDriver(document.body),
      );
      return await testkit.getTooltipText();
    },
  };
};
