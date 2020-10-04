import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get the label text by idx */
    getLabelText: async idx =>
      await base.$(`[data-hook="${dataHooks.timelineLabel}-${idx}"]`).text(),

    /** Get the suffix text by idx */
    getSuffixText: async idx =>
      await base
        .$(`[data-hook="${dataHooks.timelineTextSuffix}-${idx}"]`)
        .text(),
  };
};
