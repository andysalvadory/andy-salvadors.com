import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const customModalLayoutDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),
  };
};
