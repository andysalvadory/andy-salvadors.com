import { eyesItInstance } from '../../../test/utils/eyes-it';
import { checkboxTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { runFocusTests } from '../../common/Focusable/FocusableTestsE2E';

import { storySettings } from '../docs/storySettings';

const NO_DESCRIPTION = '';

describe('Checkbox', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const checkboxDriver = checkboxTestkitFactory({
    dataHook: 'storybook-checkbox',
  });
  const eyes = eyesItInstance();

  describe(NO_DESCRIPTION, () => {
    const waitForCheckbox = () =>
      waitForVisibilityOf(checkboxDriver.element(), 'Cannot find Checkbox');
    const clickTab = () =>
      browser
        .actions()
        .sendKeys(protractor.Key.TAB)
        .perform();

    beforeEach(async () => {
      // TODO: We do browser.get() before EACH test in order to reset the focus.
      // implement a generic solution in AutoExampleDriver that will do
      // proper reset of the focus, so we don't have to get the page,
      // and thus the test will run faster.
      await browser.get(storyUrl);

      // No need for reset as long as we do browser.get() before each test.
      // await autoExampleDriver.reset();
      await waitForCheckbox();
    });

    eyes.it('should set checked state when clicked', async () => {
      expect(await checkboxDriver.isChecked()).toBe(false);
      await checkboxDriver.click();
      expect(await checkboxDriver.isChecked()).toBe(true);
    });

    eyes.it('should show focused styles', async () => {
      expect(await checkboxDriver.isFocused()).toBe(false);
      await clickTab();
      expect(await checkboxDriver.isFocused()).toBe(true);
    });

    describe('has error', () => {
      beforeEach(async () => {
        await autoExampleDriver.setProps({ hasError: true });
      });

      eyes.it('should show focused styles', async () => {
        expect(await checkboxDriver.hasError()).toBe(true);
        expect(await checkboxDriver.isFocused()).toBe(false);
        await clickTab();
        expect(await checkboxDriver.isFocused()).toBe(true);
      });
    });

    describe('is disabled', () => {
      beforeEach(async () => {
        await autoExampleDriver.setProps({ disabled: true });
      });

      eyes.it('should not be focusable', async () => {
        expect(await checkboxDriver.isDisabled()).toBe(true);
        expect(await checkboxDriver.isFocused()).toBe(false);
        await clickTab();
        expect(await checkboxDriver.isFocused()).toBe(false);
      });
    });
  });

  describe('Generic', () => {
    runFocusTests(checkboxDriver, storyUrl);
  });
});
