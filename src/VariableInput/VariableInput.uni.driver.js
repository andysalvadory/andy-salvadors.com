import { statusIndicatorDriverFactory } from '../StatusIndicator/StatusIndicator.uni.driver';
import { dataHooks, statusTypes } from './constants';
import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';

export const getContent = base => base.$('.public-DraftEditor-content');
export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

export default (base, body) => {
  const statusIndicatorDriver = statusIndicatorDriverFactory(
    base.$(`[data-hook=${dataHooks.indicator}]`),
    body,
  );

  return {
    ...baseUniDriverFactory(base, body),
    isDisabled: async () =>
      (await getContent(base).attr('contenteditable')) === 'false',
    getContent: () => getContent(base).text(),
    getPlaceholder: () => getPlaceholder(base).text(),
    enterText: async text => {
      const contentElement = await getContent(base).getNative(); // eslint-disable-line no-restricted-properties

      // TODO: implement for puppeteer. Throw error if type is not handled
      if (base.type === 'react') {
        return ReactBase(getContent(base)).beforeInput({ data: text });
      } else if (base.type === 'protractor') {
        contentElement.sendKeys(text);
      }
    },
    blur: async () => {
      if (base.type === 'react') {
        return ReactBase(getContent(base)).blur();
      } else if (base.type === 'puppeteer') {
        await page.$eval('.public-DraftEditor-content', e => e.blur());
      }
    },
    hasError: async () => {
      const exists = await statusIndicatorDriver.exists();
      if (exists) {
        const status = await statusIndicatorDriver.getStatus();
        return status === statusTypes.error;
      }

      return false;
    },
    getErrorMessage: statusIndicatorDriver.getMessage,
    hasWarning: async () => {
      const exists = await statusIndicatorDriver.exists();
      if (exists) {
        const status = await statusIndicatorDriver.getStatus();
        return status === statusTypes.warning;
      }

      return false;
    },
    getWarningMessage: statusIndicatorDriver.getMessage,
  };
};
