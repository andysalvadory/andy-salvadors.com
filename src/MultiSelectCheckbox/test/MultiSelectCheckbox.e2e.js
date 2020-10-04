import { multiSelectCheckboxTestkitFactory } from '../../../testkit/protractor';
import eyes from 'eyes.it';

import { storySettings, testStories } from '../docs/storySettings';
import { setupBeforeEach } from '../../../test/utils/e2e-helpers';

describe('MultiSelectCheckbox', () => {
  let driver;

  function createTestkit() {
    driver = multiSelectCheckboxTestkitFactory({
      dataHook: storySettings.dataHook,
    });
    return driver;
  }

  setupBeforeEach(
    testStories.multiSelectCheckbox,
    storySettings,
    createTestkit,
  );

  eyes.it(
    'should update the input with selected values when select multiple check box in drop down',
    async () => {
      await driver.clickInput();
      await driver.selectItemById('Arkansas');
      await driver.selectItemById('California');

      expect(driver.getInput().getAttribute('value')).toBe(
        'Arkansas, California',
      );
    },
  );

  eyes.it(
    'should open or close drop down when clicking on the input',
    async () => {
      await driver.clickInput();
      expect((await driver.getDropdown()).isDisplayed()).toBe(true);
      await driver.clickInput();
      expect((await driver.getDropdown()).isDisplayed()).toBe(false);
    },
  );
});
