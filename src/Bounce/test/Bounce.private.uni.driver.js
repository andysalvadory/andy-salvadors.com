import { bounceDriverFactory as publicDriverFactory } from '../Bounce.uni.driver';

export const bouncePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
