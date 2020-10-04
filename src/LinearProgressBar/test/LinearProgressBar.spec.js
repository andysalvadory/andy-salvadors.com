import React from 'react';
import linearProgressBarDriverFactory from '../LinearProgressBar.driver';
import LinearProgressBar from '../LinearProgressBar';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';

import { linearProgressBarDriverFactory as linearProgressBarUniDriverFactory } from '../LinearProgressBar.uni.driver';

const createLinearProgressBar = (props = {}) => {
  const dataHook = 'linear-progress-bar';
  return <LinearProgressBar {...props} dataHook={dataHook} />;
};

describe('LinearProgressBar', () => {
  const defaultProps = {
    value: 40,
  };

  describe('[sync]', () => {
    runTests(createRendererWithDriver(linearProgressBarDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(linearProgressBarUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should render', async () => {
      const { driver } = render(createLinearProgressBar({ ...defaultProps }));
      expect(await driver.exists()).toBe(true);
    });

    describe('on error', () => {
      const errorProps = {
        error: true,
        errorMessage: 'No soup for you',
        showProgressIndication: true,
      };

      it('should display tooltip text', async () => {
        const { driver } = render(
          createLinearProgressBar({ ...defaultProps, ...errorProps }),
        );
        expect(await driver.isTooltipShown()).toBe(false);
        await driver.getTooltip().mouseEnter();
        expect(await driver.isTooltipShown()).toBe(true);
      });

      it('should display error message', async () => {
        const { driver } = render(
          createLinearProgressBar({ ...defaultProps, ...errorProps }),
        );
        const toolTipErrorMsg = await driver.getTooltipErrorMessage();
        expect(toolTipErrorMsg).toEqual(errorProps.errorMessage);
      });

      it('should display error icon', async () => {
        const { driver } = render(
          createLinearProgressBar({ ...defaultProps, ...errorProps }),
        );
        expect(await driver.isErrorIconShown()).toBe(true);
      });
    });

    describe('on completion', () => {
      const successProps = {
        value: 100,
        showProgressIndication: true,
      };

      it('should display success icon', async () => {
        const { driver } = render(createLinearProgressBar({ ...successProps }));
        expect(await driver.isSuccessIconShown()).toBe(true);
      });
    });
  }
});
