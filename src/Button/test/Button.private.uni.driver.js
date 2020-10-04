import { buttonDriverFactory } from '../Button.uni.driver';

export const buttonPrivateDriverFactory = base => {
  return {
    ...buttonDriverFactory(base),
    /** Returns the button size */
    _getSize: async () => base.attr(`data-size`),
    /** Returns the button priority */
    _getPriority: async () => base.attr(`data-priority`),
  };
};
