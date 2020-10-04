import { eyesItInstance } from '../../test/utils/eyes-it';
import {
  calendarTestkitFactory,
  waitForVisibilityOf,
} from '../../testkit/protractor';
import { createStoryUrl } from '../../test/utils/storybook-helpers';
import { TESTS_PREFIX } from '../../stories/storiesHierarchy';

describe('Calendar', () => {
  const eyes = eyesItInstance();
  const storyUrl = ({ selectedDays, numOfMonths }) => {
    const baseUrl = createStoryUrl({
      kind: `${TESTS_PREFIX}/3. Inputs/3.13 Calendar`,
      story: '1. selectedDays',
    });
    return `${baseUrl}&selectedDays=${global.encodeURIComponent(
      JSON.stringify(selectedDays),
    )}&numOfMonths=${numOfMonths || 1}`;
  };
  const dataHook = 'calendar';
  const driver = calendarTestkitFactory({ dataHook });

  eyes.it(
    'should correctly render when selectedDays is a single date',
    async () => {
      await browser.get(storyUrl({ selectedDays: new Date('2017/05/01') }));
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  eyes.it(
    'should correctly render when selectedDays is a date range',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/06'),
          },
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  eyes.it(
    'should correctly render two months',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            from: new Date('2017/05/02'),
            to: new Date('2017/06/06'),
          },
          numOfMonths: 2,
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  eyes.it(
    'should correctly render when selectedDays is a date range with boundaries outside the current month',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            from: new Date('2017/04/01'),
            to: new Date('2017/07/01'),
          },
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
      await driver.nextMonth(); // May
      expect(await driver.getMonthCaption()).toBe('May');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  it('should navigate to previous month', async () => {
    await browser.get(
      storyUrl({
        selectedDays: new Date('2017/06/01'),
      }),
    );
    await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    await driver.prevMonth(); // May
    expect(await driver.getMonthCaption()).toBe('May');
  });

  eyes.it(
    'should correctly render when selectedDays is an infinite date range starting in the current month',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            from: new Date('2017/05/02'),
          },
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  eyes.it(
    'should correctly render when selectedDays is an infinite date range ending in the current month',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            to: new Date('2017/06/29'),
          },
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );

  eyes.it(
    'should correctly render when selectedDays is a range of one day',
    async () => {
      await browser.get(
        storyUrl({
          selectedDays: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/02'),
          },
        }),
      );
      await waitForVisibilityOf(driver.getElement(), 'Cannot find Calendar');
    },
    { enableSnapshotAtBrowserGet: false },
  );
});
