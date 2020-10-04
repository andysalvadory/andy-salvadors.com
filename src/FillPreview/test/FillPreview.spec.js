import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import FillPreview from '../FillPreview';
import { fillPreviewPrivateDriverFactory } from './FillPreview.private.uni.driver';

describe('FillPreview', () => {
  const render = createRendererWithUniDriver(fillPreviewPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render with default props', async () => {
    const { driver } = render(<FillPreview />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.addIconExists()).toBeFalsy();
    expect(await driver.hasTooltip()).toBeFalsy();
    expect(await driver.isSelected()).toBeFalsy();
  });

  it('should render add icon in "add" mode', async () => {
    const { driver } = render(<FillPreview mode="add" />);

    expect(await driver.addIconExists()).toBeTruthy();
  });

  it('should call callback on click', async () => {
    const onClick = jest.fn();

    const { driver } = render(<FillPreview onClick={onClick} />);
    await driver.click();

    expect(onClick).toBeCalledTimes(1);
  });

  it('should render selected state', async () => {
    const { driver } = render(<FillPreview selected />);

    expect(await driver.isSelected()).toBeTruthy();
  });

  it('should accept addModeTooltipContent and show in tooltip', async () => {
    const message = 'Add color';
    const { driver } = render(
      <FillPreview mode="add" addModeTooltipContent={message} />,
    );

    expect(await driver.getTooltipText()).toEqual(message);
  });

  it('should not add tooltip if addModeTooltipContent is not given', async () => {
    const { driver } = render(<FillPreview mode="add" />);

    expect(await driver.hasTooltip()).toBe(false);
  });

  it('should not add tooltip if not in "add" mode', async () => {
    const message = 'Add color';
    const { driver } = render(<FillPreview addModeTooltipContent={message} />);

    expect(await driver.hasTooltip()).toBe(false);
  });

  describe('`selected` prop', () => {
    it('should be selected [when] given', async () => {
      const { driver } = render(<FillPreview selected />);

      expect(await driver.isSelected()).toBe(true);
    });
  });
});
