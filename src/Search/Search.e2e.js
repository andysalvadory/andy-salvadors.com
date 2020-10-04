import eyes from 'eyes.it';
import { searchTestkitFactory } from '../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { storySettings } from './docs/storySettings';

describe('Search', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
  });
  const driver = searchTestkitFactory({ dataHook: 'storybook-search' });

  beforeAll(() => {
    browser.get(storyUrl);
  });

  beforeEach(done => {
    waitForVisibilityOf(driver.element(), 'Can not find Search').then(done);
  });

  afterEach(() => {
    autoExampleDriver.reset();
  });

  eyes.it('should filter search options by input', async () => {
    expect((await driver.getSearchDropdown()).isDisplayed()).toBe(false);
    await driver.clickOnInput();
    await driver.enterText('fox');
    expect((await driver.getSearchDropdown()).isDisplayed()).toBe(true);
    expect(driver.getSearchOptionsCount()).toBe(1);
    expect(driver.getSearchOptionAt(0)).toBe('fox');
  });

  eyes.it('should choose one of search options', async () => {
    await driver.clickOnInput();
    await driver.enterText('the');
    await driver.clickSearchOptionAt(0);
    expect(await driver.getText()).toBe('The quick');
  });

  eyes.it(
    'should clear input and show all search options after clear button click',
    async () => {
      driver.clickOnInput();
      driver.enterText('fox');
      expect(driver.hasClearButton()).toBe(true);
      driver.clickClear();
      expect((await driver.getSearchDropdown()).isDisplayed()).toBe(false);
      expect(driver.getText()).toBe('');
    },
  );
});
