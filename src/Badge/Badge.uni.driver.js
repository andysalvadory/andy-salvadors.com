import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const badgeUniDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  /** returns element's innerHtml */
  getContent: () => base._prop('innerHTML'),
  /** returns elements text */
  text: () => base.text(),
  getType: () => base.attr('data-type'),
  getSkin: () => base.attr('data-skin'),
  getSize: () => base.attr('data-size'),
  isUppercase: async () => (await base.attr('data-uppercase')) === 'true',
  hasClickCursor: async () => (await base.attr('data-clickable')) === 'true',
  /** @deprecated use your own dataHook on prefix element instead */
  getPrefixIcon: async () => {
    if (await base.$(`[data-prefix-icon]`).exists()) {
      return await base.$(`[data-prefix-icon]`).getNative(); //eslint-disable-line
    }
    return null;
  },
  /** @deprecated use your own dataHook on suffix element instead */
  getSuffixIcon: async () => {
    if (await base.$(`[data-suffix-icon]`).exists()) {
      return await base.$(`[data-suffix-icon]`).getNative(); // eslint-disable-line
    }
    return null;
  },
});
