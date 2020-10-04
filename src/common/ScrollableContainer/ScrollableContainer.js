import React, { createRef } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import { getScrollPositionY } from './scrollPositionLogic';

export default class ScrollableContainer extends React.Component {
  static propTypes = {
    /* The container max height */
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /* The wait time value the scroll event will be throttled by */
    scrollThrottleWait: PropTypes.number,
    /* Handler for scroll position changed [ top | middle | bottom | none ] */
    onScrollPositionChanged: PropTypes.func,
    /* Handler for scroll changed */
    onScrollChanged: PropTypes.func,
  };

  static defaultProps = {
    scrollThrottleWait: 20,
  };

  scrollPositionY;

  handleScrollChanged = throttle(
    e => {
      const { onScrollChanged } = this.props;
      onScrollChanged && onScrollChanged(e);
    },
    this.props.scrollThrottleWait,
    { trailing: true },
  );

  handleScrollPositionChanged = throttle(
    ({ target }) => {
      const newScrollPositionY = getScrollPositionY(target);
      if (this.scrollPositionY !== newScrollPositionY) {
        this.scrollPositionY = newScrollPositionY;
        const { onScrollPositionChanged } = this.props;
        onScrollPositionChanged({
          target,
          position: { y: newScrollPositionY },
        });
      }
    },
    this.props.scrollThrottleWait,
    { trailing: true },
  );

  containerRef = createRef();

  componentDidMount() {
    if (this.props.onScrollPositionChanged) {
      this.containerRef.current.addEventListener(
        'scroll',
        this.handleScrollPositionChanged,
      );
      this.handleScrollPositionChanged({ target: this.containerRef.current });
    }

    if (this.props.onScrollChanged) {
      this.containerRef.current.addEventListener(
        'scroll',
        this.handleScrollChanged,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.onScrollPositionChanged) {
      this.containerRef.current.removeEventListener(
        'scroll',
        this.handleScrollPositionChanged,
      );
    }

    if (this.props.onScrollChanged) {
      this.containerRef.current.removeEventListener(
        'scroll',
        this.handleScrollChanged,
      );
    }
  }

  getMaxHeight() {
    const { maxHeight } = this.props;
    if (typeof maxHeight !== 'undefined')
      return isFinite(maxHeight) ? `${maxHeight}px` : `${maxHeight}`;
  }

  render() {
    const { children, dataHook, className, style } = this.props;
    const maxHeight = this.getMaxHeight();
    const stl = {
      overflowY: 'auto',
      ...(maxHeight ? { maxHeight } : {}),
      ...style,
    };

    return (
      <div
        data-hook={dataHook}
        data-maxheight={maxHeight}
        className={className}
        style={stl}
        ref={this.containerRef}
      >
        {children}
      </div>
    );
  }
}
