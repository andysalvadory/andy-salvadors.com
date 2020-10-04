import { avatarDriverFactory } from 'wix-ui-core/dist/src/components/avatar/avatar.uni.driver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { dataHooks } from './constants';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';

export const avatarUniDriverFactory = base => {
  const getIndication = () =>
    iconButtonDriverFactory(base.$(`[data-hook="${dataHooks.indication}"]`));
  const getLoader = () =>
    loaderUniDriverFactory(base.$(`[data-hook="${dataHooks.loader}"]`));
  const getCustomIndication = () =>
    iconButtonDriverFactory(
      base.$(`[data-hook="${dataHooks.customIndication}"]`),
    );
  return {
    ...avatarDriverFactory(base.$(`[data-hook="${dataHooks.avatarCore}"]`)),
    hover: () => base.$(`[data-hook="${dataHooks.avatarWSR}"]`).hover(),
    clickIndication: () => getIndication().click(),
    clickCustomIndication: () => getCustomIndication().click(),
    indicationExists: () => getIndication().exists(),
    isLoading: () => getLoader().exists(),
    customIndicationExists: () => getCustomIndication().exists(),
  };
};
