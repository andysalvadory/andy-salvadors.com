import { PopoverMenuDriver as publicDriverFactory } from '../PopoverMenu.uni.driver';
import { dropdownBasePrivateDriverFactory } from '../../../DropdownBase/DropdownBase.private.uni.driver';

export const PopoverMenuPrivateDriver = base => {
  const { keyDown } = dropdownBasePrivateDriverFactory(base);
  const getOption = (option, dataHook) =>
    base.$(
      dataHook
        ? `[data-hook="${dataHook}"]`
        : `[data-hook="popover-menu-${option}"]`,
    );

  return {
    ...publicDriverFactory(base),
    keyDownTrigger: key => keyDown(key),
    keyDownOption: async (option, key) => getOption(option).pressKey(key),
    getDivider: async dataHook => getOption('', dataHook).getNative(),
    getMenuItem: async (option, dataHook) =>
      await getOption(option, dataHook).getNative(),
  };
};
