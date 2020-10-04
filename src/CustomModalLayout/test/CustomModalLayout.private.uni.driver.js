import { customModalLayoutDriverFactory as publicDriverFactory } from '../CustomModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const customModalLayoutPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    ...baseModalLayoutPrivateDriverFactory(base),
  };
};
