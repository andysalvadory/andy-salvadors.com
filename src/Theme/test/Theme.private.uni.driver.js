import { themeDriverFactory as publicDriverFactory } from '../Theme.uni.driver';

export const themePrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
