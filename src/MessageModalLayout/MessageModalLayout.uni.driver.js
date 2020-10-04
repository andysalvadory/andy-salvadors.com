import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const messageModalLayoutDriverFactory = (base, body) => {
  return {
    ...baseModalLayoutDriverFactory(base, body),
  };
};
