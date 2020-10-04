import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const floatingHelperContentUniDriverFactory = (base, body) => {
  const getElementByDataHook = dataHook => body.$(`[data-hook='${dataHook}']`);

  const title = getElementByDataHook(dataHooks.title);
  const floatingHelperBody = getElementByDataHook(dataHooks.body);
  const image = getElementByDataHook(dataHooks.image);
  const actionButton = getElementByDataHook(dataHooks.actionButton);
  const footer = getElementByDataHook(dataHooks.footer);

  const hasFooter = footer.exists;
  const hasImage = image.exists;

  return {
    ...baseUniDriverFactory(base, body),

    /** checks if title exists */
    hasTitle: title.exists,

    /** checks if text content exists */
    hasBody: floatingHelperBody.exists,

    /** checks if the action button exists */
    hasActionButton: actionButton.exists,

    /** checks if the footer exists */
    hasFooter,

    /** checks if an image exists */
    hasImage,

    /** Get image HTML element*/
    getImage: async () => hasImage() && (await image.getNative()).children[0], // eslint-disable-line no-restricted-properties

    /** Get footer HTML element*/
    getFooter: async () =>
      hasFooter() && (await footer.getNative()).children[0], // eslint-disable-line no-restricted-properties

    /** Get the text content of the title */
    getTitleContent: title.text,

    /** Get the text content of the helper's text */
    getBodyContent: floatingHelperBody.text,

    /** Get text of action button */
    getActionButtonText: actionButton.text,

    /** click on the action button */
    clickActionButton: actionButton.click,
  };
};
