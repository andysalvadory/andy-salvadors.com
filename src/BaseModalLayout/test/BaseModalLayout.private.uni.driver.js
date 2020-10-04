import { baseModalLayoutDriverFactory as publicDriverFactory } from '../BaseModalLayout.uni.driver';
import { buttonDriverFactory } from '../../Button/Button.uni.driver';
import { dataHooks } from '../constants';

export const baseModalLayoutPrivateDriverFactory = (base, body) => {
  const getPrimaryButton = () =>
    buttonDriverFactory(base.$(`[data-hook="${dataHooks.primaryButton}"]`));
  const getSecondaryButton = () =>
    buttonDriverFactory(base.$(`[data-hook="${dataHooks.secondaryButton}"]`));
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
    hasClass: className => base.hasClass(className),
    childExists: selector => base.$(selector).exists(),
    primaryButtonHasSkin: async skin => getPrimaryButton().hasSkin(skin),
    secondaryButtonHasSkin: async skin => getSecondaryButton().hasSkin(skin),
  };
};
