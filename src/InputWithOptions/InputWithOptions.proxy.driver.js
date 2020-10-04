export const dropdownLayoutDriverProxy = (
  drodpwnLayoutDummy,
  dropdownLayoutTestkit,
  popoverTestkit,
  driver,
) => {
  return {
    ...Object.keys(drodpwnLayoutDummy()).reduce((prev, current) => {
      return {
        ...prev,
        [current]: async args => {
          const isPopoverShown = await (await popoverTestkit()).isContentElementExists();
          if (current === 'isShown' || current === 'exists') {
            return isPopoverShown;
          }

          if (current === 'getDropdown' || current === 'getDropdownItem') {
            return isPopoverShown
              ? (await dropdownLayoutTestkit())[current](args)
              : { isDisplayed: () => false };
          }

          !isPopoverShown && (await driver.pressKey('ArrowDown'));

          return await (await dropdownLayoutTestkit())[current](args);
        },
      };
    }, {}),
  };
};
