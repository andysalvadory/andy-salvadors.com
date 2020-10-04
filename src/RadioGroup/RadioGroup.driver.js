import toArray from 'lodash/toArray';
import { isClassExists } from '../../test/utils';
import radioButtonDriverFactory from './RadioButton/RadioButton.driver';

const radioGroupDriverFactory = ({ element }) => {
  const radios = () =>
    (toArray(element.children) || []).map(radio =>
      Object.assign(radio, radioButtonDriverFactory({ element: radio })),
    );
  const labels = () => radios().map(radio => radio.getLabelElement());
  const selectedRadio = () => radios().find(radio => radio.isChecked());
  const getRadioByValue = value => {
    const stringValue = value.toString();
    return radios().find(radio => radio.getValue() === stringValue);
  };

  return {
    exists: () => !!element,
    selectByValue: value => getRadioByValue(value).check(),
    selectByIndex: index => radios()[index].check(),
    getRadioValueAt: index => {
      const radio = radios()[index];
      if (radio) return radio.getValue();

      // Throws an error in case there is no RadioButton at the given index
      throw new Error(`No RadioButton at index ${index}`);
    },
    getRadioAtIndex: index => radios()[index],
    getSelectedValue: () => {
      const selected = selectedRadio();
      return selected ? selected.getValue() : null;
    },
    isRadioDisabled: index => radios()[index].isDisabled(),
    // TODO: We should deprecate getClassOfLabelAt(). Css tests should be in e2e tests.
    getClassOfLabelAt: index => labels()[index].className,
    isVerticalDisplay: () => isClassExists(element, 'vertical'),
    isHorizontalDisplay: () => isClassExists(element, 'horizontal'),
    spacing: () => element.children['1'].style._values['margin-top'],
    lineHeight: () => labels()[0].style._values['line-height'],
    getNumberOfRadios: () => radios().length,
  };
};

export default radioGroupDriverFactory;
