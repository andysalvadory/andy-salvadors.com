import styles from './Checkbox.scss';
import focusableDriverFactory from '../common/Focusable/Focusable.protractor.driver';
import { mergeDrivers } from '../../test/utils/private-drivers';
import { hasAttribute, hasClass } from '../../test/utils/protractor-helpers';
import { dataHooks } from './constants';

/**
 * @return <T extends InternalFocusableDriver>
 */
export const internalDriverFactory = element => {
  const getBox = () => element.$(`[data-hook="${dataHooks.box}"]`);
  const getTextChildren = () =>
    element.$(`[data-hook="${dataHooks.children}"]`);

  return {
    // Implements: InternalFocusableDriver
    focusableElement: element,
    clickableGetters: [getBox, getTextChildren],
  };
};

const checkboxDriverFactory = element => {
  const checkboxElement = element.$(`[data-hook="${dataHooks.box}"]`);
  const childrenElement = element.$(`[data-hook="${dataHooks.children}"]`);

  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [checkboxElement, childrenElement],
  });

  const publicDriver = {
    element: () => element,
    click: () => checkboxElement.click(),
    getLabel: () => element.$(`[data-hook="${dataHooks.label}"]`),
    getInput: () => element.$(`[data-hook="${dataHooks.input}"]`),
    isChecked: () => element.$(`[data-hook="${dataHooks.input}"]`).isSelected(),
    isDisabled: () =>
      hasAttribute(element.$(`[data-hook="${dataHooks.input}"]`), 'disabled'),
    hasError: () => hasClass(element, styles.hasError),
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default checkboxDriverFactory;
