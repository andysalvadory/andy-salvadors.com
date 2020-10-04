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
  maxHeight?: number | string;
  scrollThrottleWait?: number;
  onScrollPositionChanged?(scrollChangedData: ScrollChangedData): void;
  onScrollChanged?(target: HTMLElement): void;
}

export default class ScrollableContainer extends React.Component<
  ScrollableContainerProps
> {}
