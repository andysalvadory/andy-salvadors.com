import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const baseModalLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get the title's text */
    getTitleText: async () => base.$(`[data-hook="${dataHooks.title}"]`).text(),

    /** Get the subtitle's text */
    getSubtitleText: async () =>
      base.$(`[data-hook="${dataHooks.subtitle}"]`).text(),

    /** Click the primary button */
    clickPrimaryButton: async () =>
      base.$(`[data-hook="${dataHooks.primaryButton}"]`).click(),

    /** Click the secondary button */
    clickSecondaryButton: async () =>
      base.$(`[data-hook="${dataHooks.secondaryButton}"]`).click(),

    /** Click the secondary button */
    clickCloseButton: async () =>
      base.$(`[data-hook="${dataHooks.closeButton}"]`).click(),

    /** Get the primary button's text */
    getPrimaryButtonText: async () =>
      base.$(`[data-hook="${dataHooks.primaryButton}"]`).text(),

    /** Get the secondary button's text */
    getSecondaryButtonText: async () =>
      base.$(`[data-hook="${dataHooks.secondaryButton}"]`).text(),

    /** Get the modal's width from the wrapping div style */
    getModalWidth: async () => (await base._prop('style')).width,
  };
};
