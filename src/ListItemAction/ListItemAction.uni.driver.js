import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import style from './ListItemAction.st.css';
import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';

export const ListItemActionDriverFactory = base => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),

    isTitleExists: async () =>
      base.$('[data-hook="list-item-action-title"]').exists(),
    getTitleText: async () =>
      base.$('[data-hook="list-item-action-title"]').text(),
    isPrefixIconExists: async () =>
      base.$('[data-hook="list-item-action-prefix-icon"]').exists(),
    getSkin: async () => stylableUtil.getStyleState(base, 'skin'),
    isDisabled: async () => stylableUtil.getStyleState(base, 'disabled'),
  };
};
