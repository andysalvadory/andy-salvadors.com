import { avatarDriverFactory } from 'wix-ui-core/dist/src/components/avatar/avatar.uni.driver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';

import DATA_HOOKS from './DataHooks';

export default base => {
  const getIndication = () =>
    iconButtonDriverFactory(base.$(`[data-hook="${DATA_HOOKS.INDICATION}"]`));

  return {
    ...avatarDriverFactory(base),
    clickIndication: () => getIndication().click(),
    indicationExists: () => getIndication().exists(),
  };
};
