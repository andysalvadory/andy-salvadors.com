import { multiSelectCheckboxTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import eyes from 'eyes.it';

import { storySettings } from './docs/storySettings';

describe('MultiSelectCheckbox', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const driver = multiSelectCheckboxTestkitFactory({
    dataHook: 'multi-select-checkbox',
  });

  beforeEach(() => {
    browser.get(storyUrl);
  });

  eyes.it(
    'should update the input with selected values when select multiple check box in drop down',
    async () => {
      await waitForVisibilityOf(
        driver.element(),
        'Cannot find <MultiSelectCheckbox/>',
      );

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
