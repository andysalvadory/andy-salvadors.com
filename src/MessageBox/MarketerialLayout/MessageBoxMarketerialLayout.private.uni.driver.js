import { messageBoxMarketerialLayoutUniDriverFactory } from './MessageBoxMarketerialLayout.uni.driver';

export const messageBoxMarketerialLayoutPrivateUniDriverFactory = base => {
  const getPrimaryButtonBase = () => base.$('[data-hook="primary-button"]');
  const getCloseButtonBase = () => base.$('[data-hook="close-button"]');

  return {
    ...messageBoxMarketerialLayoutUniDriverFactory(base),
    isClassPresentInPrimaryButton: className =>
      getPrimaryButtonBase().hasClass(className),
    isClassPresentInHeaderCloseButton: async className =>
      getCloseButtonBase().hasClass(className),
    isPrimaryButtonDisabled: async () =>
      await getPrimaryButtonBase()._prop('disabled'),
  };
};
