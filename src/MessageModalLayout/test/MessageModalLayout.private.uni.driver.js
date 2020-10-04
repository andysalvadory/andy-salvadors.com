import { messageModalLayoutDriverFactory as publicDriverFactory } from '../MessageModalLayout.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const messageModalLayoutPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...baseModalLayoutPrivateDriverFactory(base),
  };
};
