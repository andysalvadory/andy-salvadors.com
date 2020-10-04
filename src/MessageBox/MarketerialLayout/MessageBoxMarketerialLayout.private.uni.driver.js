import { messageBoxMarketerialLayoutUniDriverFactory } from './MessageBoxMarketerialLayout.uni.driver';

export const messageBoxMarketerialLayoutPrivateUniDriverFactory = base => {
  const getPrimaryButtonBase = () => base.$('[data-hook="primary-button"]');
  const getCloseButtonBase = () => base.$('[data-hook="close-button"]');

  return {
    ...messageBoxMarketerialLayoutUniDriverFactory(base),
    isClassPresentInPrimaryButton: className =>
      getPrimaryButtonBase().hasClass(className),
    closeButtonHasSkin: async skin =>
      (await getCloseButtonBase().attr('data-skin')) === skin,
    isPrimaryButtonDisabled: async () =>
      !!(await getPrimaryButtonBase()._prop('disabled')),
  };
};
