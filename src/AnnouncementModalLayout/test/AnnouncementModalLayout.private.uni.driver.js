import { announcementModalLayoutDriverFactory as publicDriverFactory } from '../AnnouncementModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const announcementModalLayoutPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...baseModalLayoutPrivateDriverFactory(base),
  };
};
