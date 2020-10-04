import messageBoxMarketerialLayoutDriverFactory from './MessageBoxMarketerialLayout.driver';

const messageBoxMarketerialLayoutPrivateDriverFactory = ({ element }) => {
  const primaryButton = () =>
    element.querySelector('[data-hook="primary-button"]');
  const closeButton = () => element.querySelector('[data-hook="close-button"]');

  return {
    ...messageBoxMarketerialLayoutDriverFactory({ element }),
    isClassPresentInPrimaryButton: className =>
      primaryButton().classList.contains(className),
    isPrimaryButtonDisabled: () => !!primaryButton().attributes.disabled,
    closeButtonHasSkin: skin =>
      closeButton().getAttribute('data-skin') === skin,
  };
};

export default messageBoxMarketerialLayoutPrivateDriverFactory;
