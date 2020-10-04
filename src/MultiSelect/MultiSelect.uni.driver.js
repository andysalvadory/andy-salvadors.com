import { baseUniDriverFactory } from '../../test/utils/unidriver';
import ReactTestUtils from 'react-dom/test-utils';
import { inputWithOptionsUniDriverFactory } from '../InputWithOptions/InputWithOptions.uni.driver';
import { tagPrivateUniDriverFactory } from '../Tag/Tag.private.uni.driver';

export const multiselectUniDriverFactory = (base, body) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsUniDriverFactory(base, body);

  const getInputWrapper = async () =>
    (await driver.inputWrapper()).childNodes[0];

  const tags = base.$$('[data-hook="tag"]');

  const multiSelectDriver = {
    ...baseUniDriverFactory(base),
    ...driver,
    getMaxHeight: async () => (await getInputWrapper()).style.maxHeight,
    clickOnInputWrapper: async () =>
      ReactTestUtils.Simulate.click(await getInputWrapper()),
    inputWrapperHasFocus: async () =>
      (await getInputWrapper()).classList.contains('hasFocus'),
    inputWrapperHasError: async () =>
      (await getInputWrapper()).classList.contains('error'),
    inputWrapperIsDisabled: async () =>
      (await getInputWrapper()).classList.contains('disabled'),
    numberOfTags: () => tags.count(),
    getTagLabelAt: index => tags.get(index).text(),
    pressCommaKey: () => inputDriver.pressKey(','),
    getTagDriverByTagId: async tagId =>
      tagPrivateUniDriverFactory(
        tags.filter(async tag => (await tag._prop('id')) === tagId).get(0),
      ),
    customSuffixExists: async () =>
      (await getInputWrapper()).querySelector('[data-hook="custom-suffix"]'),
  };

  return { driver: multiSelectDriver, inputDriver, dropdownLayoutDriver };
};
