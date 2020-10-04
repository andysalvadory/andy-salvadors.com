import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { fireEvent } from '@testing-library/react';

export const scrollableContainerDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    getText: async () => base.text(),

    getMaxHeight: async () => base.attr('data-maxheight'),

    scroll: async () =>
      // eslint-disable-next-line no-restricted-properties
      fireEvent.scroll(await base.getNative()),
  };
};
