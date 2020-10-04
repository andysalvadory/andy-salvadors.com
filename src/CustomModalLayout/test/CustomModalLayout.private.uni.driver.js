import { customModalLayoutDriverFactory } from '../CustomModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import merge from 'lodash/merge';

export const customModalLayoutPrivateDriverFactory = base => {
  return merge(
    baseModalLayoutPrivateDriverFactory(base),
    customModalLayoutDriverFactory(base),
  );
};
