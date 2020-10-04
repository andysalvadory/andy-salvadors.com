import { messageModalLayoutDriverFactory } from '../MessageModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';
import merge from 'lodash/merge';

export const messageModalLayoutPrivateDriverFactory = base => {
  return merge(
    baseModalLayoutPrivateDriverFactory(base),
    messageModalLayoutDriverFactory(base),
  );
};
