import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';
import { scrollableContainerDriverFactory } from '../common/ScrollableContainer/ScrollableContainer.uni.driver';
import { dataHooks } from './constants';
import { getFormattedHooks } from '../utils/dataHooksUtils';

const fDataHooks = getFormattedHooks(dataHooks);

export const baseModalLayoutDriverFactory = base => {
  const getSecondaryButton = () =>
    buttonDriverFactory(base.$(fDataHooks.footerSecondaryButton));

  const getPrimaryButton = () =>
    buttonDriverFactory(base.$(fDataHooks.footerPrimaryButton));

  const getContentWrapper = () =>
    scrollableContainerDriverFactory(base.$(fDataHooks.contentWrapper));

  return {
    ...baseUniDriverFactory(base),

    /** Returns the modal theme */
    getTheme: async () => base.attr('data-theme'),

    /** Click the modal close-button */
    clickCloseButton: async () => base.$(fDataHooks.closeButton).click(),

    header: {
      /** Return if the header was rendered or not */
      exists: async () => base.$(fDataHooks.header).exists(),

      /** Returns all the text content within the `header` element */
      getHeaderText: async () => base.$(fDataHooks.header).text(),

      /** Get the title's text */
      getTitleText: async () => base.$(fDataHooks.headerTitle).text(),

      /** Get the subtitle's text */
      getSubtitleText: async () => base.$(fDataHooks.headerSubtitle).text(),
    },

    content: {
      /** Return if the content was rendered or not */
      exists: async () => base.$(fDataHooks.content).exists(),

      /** Return the content text */
      getContentText: async () => base.$(fDataHooks.content).text(),

      /** Return the content max-height */
      getMaxHeight: async () => getContentWrapper().getMaxHeight(),

      /** Returns the contentHideDividers value */
      dividersHidden: async () =>
        (await base.$(fDataHooks.content).attr('data-hidedividers')) === 'true',

      /** Simulate a generic scroll event on the content element*/
      scroll: async () => getContentWrapper().scroll(),
    },

    footer: {
      /** Return if the footer was rendered or not */
      exists: async () => base.$(fDataHooks.footer).exists(),

      /** Return the side actions text */
      getSideActionsText: async () =>
        base.$(fDataHooks.footerSideActions).text(),

      /** Return the secondary button text */
      getSecondaryButtonText: async () =>
        base.$(fDataHooks.footerSecondaryButton).text(),

      /** Clicks the secondary button */
      clickSecondaryButton: async () => getSecondaryButton().click(),

      /** Return the secondary button text */
      getPrimaryButtonText: async () =>
        base.$(fDataHooks.footerPrimaryButton).text(),

      /** Clicks the primary button */
      clickPrimaryButton: async () => getPrimaryButton().click(),
    },

    footnote: {
      /** Return if the footnote was rendered or not */
      exists: async () => base.$(fDataHooks.footnote).exists(),

      /** Return the footnote text */
      getFootnoteText: async () => base.$(fDataHooks.footnote).text(),
    },

    illustration: {
      exists: async () => base.$(fDataHooks.illustration).exists(),

      getIllustrationSize: async () =>
        base.$(fDataHooks.illustration).attr('data-size'),
    },
  };
};
