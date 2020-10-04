import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

export const sectionHelperUniDriverFactory = base => {
  const actionButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-action-btn"]'));
  const closeButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-close-btn"]'));

  return {
    ...baseUniDriverFactory(base),
    titleText: () => base.$('[data-hook="sectionhelper-title"]').text(),
    actionText: () => actionButtonDriver().getButtonTextContent(),
    clickAction: () => actionButtonDriver().click(),
    clickClose: () => closeButtonDriver().click(),
    isCloseButtonDisplayed: () => closeButtonDriver().exists(),
    textContent: () => base.text(),
    isWarning: () => base.hasClass('warning'),
    isStandard: () => base.hasClass('standard'),
    isDanger: () => base.hasClass('danger'),
    isExperimentalDark: () => base.hasClass('experimentalDark'),
    isSuccess: () => base.hasClass('success'),
    isPremium: () => base.hasClass('premium'),
    isPreview: () => base.hasClass('preview'),
  };
};
