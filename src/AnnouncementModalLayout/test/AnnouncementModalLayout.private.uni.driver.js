import { announcementModalLayoutDriverFactory } from '../AnnouncementModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import merge from 'lodash/merge';

export const announcementModalLayoutPrivateDriverFactory = base => {
  return merge(
    baseModalLayoutPrivateDriverFactory(base),
    announcementModalLayoutDriverFactory(base),
  );
};
