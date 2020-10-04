import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { rangeTestkitFactory } from '../../../testkit/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from '../docs/storySettings';
import inputDriver from '../../Input/Input.protractor.driver';
import datePickerDriver from '../../DatePicker/DatePicker.protractor.driver';

const rangeTestkitE2EFactory = rangeDriver => {
  const component = rangeDriver.element();
  const byDataHook = ({ component: wrapper, dataHook }) =>
    wrapper.$(`[data-hook='${dataHook}']`);
  const firstItem = byDataHook({ dataHook: 'first-item', component });
  const lastItem = byDataHook({ dataHook: 'last-item', component });

  const inputDriverFirst = () => inputDriver(firstItem);
  const inputDriverLast = () => inputDriver(lastItem);

  const datePickerDriverFirst = () => datePickerDriver(firstItem);
  const datePickerDriverLast = () => datePickerDriver(lastItem);

  return {
    ...rangeDriver,
    inputType: {
      isFocusedFirst: () => inputDriverFirst().isFocused(),
      isFocusedLast: () => inputDriverLast().isFocused(),
      clickFirst: () => inputDriverFirst().click(),
      clickLast: () => inputDriverLast().click(),
    },
    dateType: {
      isFocusedFirst: () => datePickerDriverFirst().inputDriver.isFocused(),
      isFocusedLast: () => datePickerDriverLast().inputDriver.isFocused(),
      clickFirst: () => datePickerDriverFirst().inputDriver.click(),
      clickLast: () => datePickerDriverLast().inputDriver.click(),
    },
  };
};

describe('Range', () => {
  const eyes = eyesItInstance();
  const testStoryUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.range,
  });

  const driverInput = rangeTestkitE2EFactory(
    rangeTestkitFactory({ dataHook: storySettings.dataHookInput }),
  );
  const driverDate = rangeTestkitE2EFactory(
    rangeTestkitFactory({ dataHook: storySettings.dataHookDatePicker }),
  );
  const waitForRange = () =>
    waitForVisibilityOf(driverInput.element(), 'Cannot find Range');

  beforeAll(async () => {
    await browser.get(testStoryUrl);
  });

  beforeEach(async () => {
    await waitForRange();
  });

  describe('Input type', () => {
    const driver = driverInput.inputType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocused');
      expect(driver.isFocusedLast()).toBe(false, 'isFocused');
    });

    eyes.it('should show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(true);
    });

    eyes.it('should show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      expect(driver.isFocusedLast()).toBe(true);
    });
  });

  describe('DatePicker type', () => {
    const driver = driverDate.dateType;
    eyes.it('should have default props', async () => {
      expect(driver.isFocusedFirst()).toBe(false, 'isFocusedFirst');
      expect(driver.isFocusedLast()).toBe(false, 'isFocusedLast');
    });

    eyes.it('should not show focused styles for first item', async () => {
      expect(driver.isFocusedFirst()).toBe(false);
      await driver.clickFirst();
      expect(driver.isFocusedFirst()).toBe(false);
    });

    eyes.it('should not show focused styles for last item', async () => {
      expect(driver.isFocusedLast()).toBe(false);
      await driver.clickLast();
      expect(driver.isFocusedLast()).toBe(false);
    });
  });
});
