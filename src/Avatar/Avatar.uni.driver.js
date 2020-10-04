import { avatarDriverFactory } from 'wix-ui-core/dist/src/components/avatar/avatar.uni.driver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { dataHooks } from './constants';

export default base => {
  const getIndication = () =>
    iconButtonDriverFactory(base.$(`[data-hook="${dataHooks.indication}"]`));
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
    customIndicationExists: () => getCustomIndication().exists(),
  };
};
