import { dropdownBaseDriverFactory } from '../../DropdownBase/DropdownBase.uni.driver';

export const PopoverMenuDriver = base => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base);
  return {
    /** Returns true of popoverMenu exists */
    exists: () => dropdownBaseTestkit.exists(),
    /** Returns trigger element */
    getTriggerElement: dataHook => base.$(`[data-hook="${dataHook}"]`),
    /** Select a specific option (requires the menu to be opened) */
    clickAtChild: option => dropdownBaseTestkit.selectOption(option),
    /** Return true if the menu is opened */
    isMenuOpen: () => dropdownBaseTestkit.isDropdownShown(),
    /** Returns children count */
    childrenCount: () => dropdownBaseTestkit.optionsCount(),
  };
};
