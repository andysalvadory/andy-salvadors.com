import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';
import { scrollableContainerDriverFactory } from '../ScrollableContainer.uni.driver';
import ScrollableContainer from '../ScrollableContainer';
import { getScrollPositionY } from '../scrollPositionLogic';
import { positionY } from '../constants';

describe('ScrollableContainer', () => {
  const render = createRendererWithUniDriver(scrollableContainerDriverFactory);

  afterEach(cleanup);

  it('should render the provided children', async () => {
    const children = <div data-hook={'children'} />;
    const { driver } = render(
      <ScrollableContainer>{children}</ScrollableContainer>,
    );
    expect(await driver.childExists('children')).toBe(true);
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
      expect.objectContaining({ position: { y: positionY.NONE } }),
    );
  });

  it('should use received forwarded ref when passed while internal registering to scroll events still works', async () => {
    const testValue = 'test';
    const testRef = React.createRef();
    const onScrollPositionChangedSpy = jest.fn();
    render(
      <ScrollableContainer
        ref={testRef}
        onScrollPositionChanged={onScrollPositionChangedSpy}
      >
        {testValue}
      </ScrollableContainer>,
    );
    expect(onScrollPositionChangedSpy).toHaveBeenCalledTimes(1);
    expect(onScrollPositionChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({ position: { y: positionY.NONE } }),
    );
    expect(testRef.current.textContent).toEqual(testValue);
  });

  describe('Scroll Logic', () => {
    it('should calculate the scrollY position to `none` when clientHeight is equal to scrollHeight', async () => {
      const position = getScrollPositionY({
        scrollHeight: 50,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(position).toBe(positionY.NONE);
    });

    it('should calculate the scrollY position to `none` when clientHeight is greater than scrollHeight', async () => {
      const position = getScrollPositionY({
        scrollHeight: 50,
        clientHeight: 51,
        scrollTop: 0,
      });
      expect(position).toBe(positionY.NONE);
    });

    it('should calculate the scrollY position to `top`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(newScrollPosition).toBe(positionY.TOP);
    });

    it('should calculate the scrollY position to `middle`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 10,
      });
      expect(newScrollPosition).toBe(positionY.MIDDLE);
    });

    it('should calculate the scrollY position to `bottom`', async () => {
      const newScrollPosition = getScrollPositionY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 50,
      });
      expect(newScrollPosition).toBe(positionY.BOTTOM);
    });
  });
});
