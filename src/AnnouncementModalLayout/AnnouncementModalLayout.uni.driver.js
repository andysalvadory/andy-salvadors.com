import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { textButtonDriverFactory } from '../TextButton/TextButton.uni.driver';
import { dataHooks } from './constants';
import { getFormattedHooks } from '../utils/dataHooksUtils';

const fDataHooks = getFormattedHooks(dataHooks);

export const announcementModalLayoutDriverFactory = base => {
  const getLink = () => textButtonDriverFactory(base.$(fDataHooks.link));

  return {
    ...baseModalLayoutDriverFactory(base),

    link: {
      /** Returns if the link component was rendered or not */
      exists: () => getLink().exists(),

      /** Returns if the link component text content */
      getLinkText: () => getLink().getButtonTextContent(),

      /** Clicks the link component */
      clickLink: async () => getLink().click(),
    },
  };
};
