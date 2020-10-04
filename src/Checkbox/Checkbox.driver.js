import { isClassExists } from '../../test/utils';
import { labelDriverFactory } from 'wix-ui-backoffice/dist/src/components/Label/Label.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
//TODO - add tooltip classic driver in the correct place
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import styles from './Checkbox.scss';
import { dataHooks } from './constants';

const labelTestkitFactory = testkitFactoryCreator(labelDriverFactory);

const checkboxDriverFactory = ({ element, eventTrigger }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const input = () => element.querySelector('input');
  const checkbox = () => element.querySelector(styles.checkbox);
  const labelDriver = () =>
    labelTestkitFactory({ wrapper: element, dataHook: dataHooks.label });
  const isChecked = () => input().checked;

  const getErrorMessage = async () => {
    const tooltipTestkit = tooltipDriverFactory({
      element: byHook(dataHooks.box),
      eventTrigger,
    });

    try {
      tooltipTestkit.mouseEnter();
      const contentElement = tooltipTestkit.getContentElement();
      tooltipTestkit.mouseLeave();
      return await contentElement.textContent;
    } catch (e) {
      throw new Error('Failed getting checkbox error message');
    }
  };

  return {
    exists: () => !!element,
    click: () =>
      eventTrigger.change(input(), {
        target: { checked: !isChecked() },
      }),
    /** trigger focus on the element */
    focus: () => eventTrigger.focus(checkbox()),
    /** trigger blur on the element */
    blur: () => eventTrigger.blur(checkbox()),
    /**
     * Focus related testing is done in e2e tests only.
     * @deprecated
     */
    hasFocusState: () => element.getAttribute('data-focus'),
    isChecked: () => isChecked(),
    isDisabled: () => isClassExists(element, styles.disabled),
    isIndeterminate: () => isClassExists(element, styles.indeterminate),
    hasError: () => isClassExists(element, styles.hasError),
    getLabel: () => labelDriver().getLabelText(),
    getLabelDriver: () => labelDriver(),
    getErrorMessage,
  };
};

export default checkboxDriverFactory;
