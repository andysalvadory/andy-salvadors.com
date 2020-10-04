import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Theme from '../Theme';
import { themePrivateDriverFactory } from './Theme.private.uni.driver';

describe('Theme', () => {
  const render = createRendererWithUniDriver(themePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Theme />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Theme />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Theme buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
