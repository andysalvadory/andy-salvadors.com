import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { scrollableContainerDriverFactory } from './ScrollableContainer.uni.driver';
import ScrollableContainer from './ScrollableContainer';
import { getScrollPositionY } from './scrollPositionLogic';

describe('ScrollableContainer', () => {
  const render = createRendererWithUniDriver(scrollableContainerDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render the provided children', async () => {
    const children = 'The children of the container';
    const { driver } = render(
      <ScrollableContainer>{children}</ScrollableContainer>,
    );
    expect(await driver.getText()).toBe(children);
  });

  it('should set the container height according to the `maxHeight` props [number]', async () => {
    const numberMaxHeight = 30;
    const { driver } = render(
      <ScrollableContainer maxHeight={numberMaxHeight} />,
    );
    expect(await driver.getMaxHeight()).toBe(numberMaxHeight + 'px');
  });

  it('should set the container height according to the `maxHeight` props [string]', async () => {
    const stringMaxHeight = '20px';
    const { driver } = render(
      <ScrollableContainer maxHeight={stringMaxHeight} />,
    );
    expect(await driver.getMaxHeight()).toBe(stringMaxHeight);
  });

  it('should call the `onScrollPositionChanged` method after container was mounted ', async () => {
    const onScrollPositionChangedSpy = jest.fn();
    render(
      <ScrollableContainer
        onScrollPositionChanged={onScrollPositionChangedSpy}
      />,
    );
    expect(onScrollPositionChangedSpy).toHaveBeenCalledTimes(1);
    expect(onScrollPositionChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({ position: { y: 'none' } }),
    );
  });

  it('should call the `onScrollChanged` method after container was scrolled', async () => {
    const onScrollChangedSpy = jest.fn();
    const { driver } = render(
      <ScrollableContainer onScrollChanged={onScrollChangedSpy} />,
    );
    await driver.scroll();
    expect(onScrollChangedSpy).toHaveBeenCalledTimes(1);
  });

  describe('Scroll Logic', () => {
    it('should calculate the scrollY position to `none` when clientHeight is equal to scrollHeight', async () => {
      const position = getScrollPositionY({
        scrollHeight: 50,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(position).toBe('none');
    });

    it('should calculate the scrollY position to `none` when clientHeight is greater than scrollHeight', async () => {
      const position = getScrollPositionY({
        scrollHeight: 50,
        clientHeight: 51,
        scrollTop: 0,
      });
      expect(position).toBe('none');
    });

    it('should calculate the scrollY position to `top`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(newScrollPosition).toBe('top');
    });

    it('should calculate the scrollY position to `middle`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 10,
      });
      expect(newScrollPosition).toBe('middle');
    });

    it('should calculate the scrollY position to `bottom`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 50,
      });
      expect(newScrollPosition).toBe('bottom');
    });
  });
});
