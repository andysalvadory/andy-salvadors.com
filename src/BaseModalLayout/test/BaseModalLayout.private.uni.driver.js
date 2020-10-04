import merge from 'lodash/merge';
import { baseModalLayoutDriverFactory } from '../BaseModalLayout.uni.driver';
import { buttonPrivateDriverFactory } from '../../Button/test/Button.private.uni.driver';
import { headingUniDriverFactory } from '../../Heading/Heading.uni.driver';
import { dataHooks } from '../constants';
import { getFormattedHooks } from '../../utils/dataHooksUtils';

const fDataHooks = getFormattedHooks(dataHooks);

export const baseModalLayoutPrivateDriverFactory = base => {
  const getTitleHeading = () =>
    headingUniDriverFactory(base.$(fDataHooks.headerTitle));

  const getPrimaryButton = () =>
    buttonPrivateDriverFactory(base.$(fDataHooks.footerPrimaryButton));

  const getSecondaryButton = () =>
    buttonPrivateDriverFactory(base.$(fDataHooks.footerSecondaryButton));

  return merge(baseModalLayoutDriverFactory(base), {
    // Add here driver methods that considered "private"
    _hasClass: className => base.hasClass(className),
    _childExists: dataHook => base.$(`[data-hook="${dataHook}"]`).exists(),
    _closeButtonExists: () => base.$(fDataHooks.closeButton).exists(),
    _getText: async () => base.text(),

    header: {
      _titleExists: async () => base.$(fDataHooks.headerTitle).exists(),
      _subtitleExists: async () => base.$(fDataHooks.headerSubtitle).exists(),
      _getTitleAppearance: async () => getTitleHeading().getAppearance(),
    },

    footer: {
      _sideActionsExists: async () =>
        base.$(fDataHooks.footerSideActions).exists(),
      _primaryButtonExists: async () =>
        base.$(fDataHooks.footerPrimaryButton).exists(),
      _secondaryButtonExists: async () =>
        base.$(fDataHooks.footerSecondaryButton).exists(),
      _primaryButtonHasSkin: async skin => getPrimaryButton().hasSkin(skin),
      _secondaryButtonHasSkin: async skin => getSecondaryButton().hasSkin(skin),
      _getPrimaryButtonSize: async () => getPrimaryButton()._getSize(),
      _getSecondaryButtonSize: async () => getPrimaryButton()._getSize(),
      _getPrimaryButtonPriority: async () => getPrimaryButton()._getPriority(),
      _getSecondaryButtonPriority: async () =>
        getSecondaryButton()._getPriority(),
      _dividerExists: async () =>
        (await base.$(fDataHooks.footer).attr('data-divider')) === 'true',
    },
  });
};
