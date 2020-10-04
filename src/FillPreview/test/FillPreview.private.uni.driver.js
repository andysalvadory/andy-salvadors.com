import { fillPreviewDriverFactory as publicDriverFactory } from '../FillPreview.uni.driver';
import { StylableUnidriverUtil } from 'wix-ui-test-utils/unidriver';
import stylesheet from '../FillPreview.st.css';

export const fillPreviewPrivateDriverFactory = (base, body) => {
  const element = base.$('[data-hook="fill-preview-button"]');
  const stylableUtil = new StylableUnidriverUtil(stylesheet);

  return {
    ...publicDriverFactory(base, body),

    addIconExists: async () =>
      base.$('[data-hook="fill-preview-add-icon"]').exists(),

    isSelected: async () =>
      (await stylableUtil.getStyleState(element, 'selected')) === 'true',
  };
};
