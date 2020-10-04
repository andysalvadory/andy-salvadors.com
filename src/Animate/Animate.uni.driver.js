import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const animateDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    getDelay: () => base._prop('style').then(style => style.animationDelay),
  };
};
