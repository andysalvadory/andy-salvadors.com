import * as React from 'react';

type ScrollPositionX = 'start' | 'middle' | 'end' | 'none';
type ScrollPositionY = 'top' | 'middle' | 'bottom' | 'none';

export interface ScrollChangedData {
  position: {
    x: ScrollPositionX;
    y: ScrollPositionY;
  };
  target: HTMLElement;
}

interface ScrollableContainerProps {
  scrollThrottleWait?: number;
  onScrollPositionChanged?(scrollChangedData: ScrollChangedData): void;
  onScrollChanged?(target: HTMLElement): void;
}

declare const ScrollableContainer: React.FunctionComponent<ScrollableContainerProps>;
export default ScrollableContainer;
