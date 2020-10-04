import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { dataHooks } from './constants';

export const announcementModalLayoutDriverFactory = (base, body) => {
  return {
    ...baseModalLayoutDriverFactory(base),
    /** Click the secondary button */
    clickLink: async () => base.$(`[data-hook="${dataHooks.link}"]`).click(),
  };
};
