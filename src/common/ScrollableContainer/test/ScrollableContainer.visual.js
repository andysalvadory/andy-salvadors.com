import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import ScrollableContainer from '../ScrollableContainer';
import { scrollableContainerPrivateDriverFactory } from './ScrollableContainer.private.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { positionY } from '../constants';

const commonProps = {
  style: {
    height: '300px',
    width: '200px',
    border: '1px solid black',
  },
  children: new Array(50)
    .fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ')
    .join(),
};

const scrollableContainerTestkitFactory = testkitFactoryCreator(
  scrollableContainerPrivateDriverFactory,
);

const dataHook = 'scrollable-container';
const createDriver = () =>
  scrollableContainerTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const tests = [
  {
    describe: 'scroll-y position',
    its: [
      {
        it: 'no scroll',
        props: {
          children: 'short text',
        },
        expected: positionY.NONE,
      },
      {
        it: 'scrolled to top',
        props: {},
        expected: positionY.TOP,
      },
      {
        it: 'scrolled to middle',
        props: {},
        expected: positionY.MIDDLE,
        componentDidMount: () => {
          createDriver()._scrollContentTo({ y: 375 });
        },
      },
      {
        it: 'scrolled to bottom',
        props: {},
        expected: positionY.BOTTOM,
        componentDidMount: () => {
          createDriver()._scrollContentTo({ y: 99999 });
        },
      },
    ],
  },
  {
    describe: 'scroll-y information',
    its: [
      {
        it: 'scrolled to 500',
        props: {},
        expected: 500,
        componentDidMount: () => {
          createDriver()._scrollContentTo({ y: 500 });
        },
      },
    ],
  },
];

const ScrollableContainerWrapper = ({ expected, ...props }) => {
  const [scrollPosition, setScrollPosition] = useState('');
  const [scrollTop, setScrollTop] = useState(0);
  const handleScrollPositionChanged = ({ position }) =>
    setScrollPosition(position.y);
  const handleScrollChanged = ({ target }) => setScrollTop(target.scrollTop);
  return (
    <div>
      <ScrollableContainer
        {...props}
        onScrollPositionChanged={handleScrollPositionChanged}
        onScrollChanged={handleScrollChanged}
      />
      <br />
      <div>
        Scroll-Y:
        <ul>
          <li
            data-test-ready={scrollPosition === expected}
          >{`Position: ${scrollPosition}`}</li>
          <li data-test-ready={scrollTop === expected}>
            {`scrollTop: ${scrollTop}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount, expected }) => {
    storiesOf(
      `ScrollableContainer${describe ? '/' + describe : ''}`,
      module,
    ).add(
      it,
      () => {
        useEffect(() => {
          componentDidMount && componentDidMount();
        }, []);
        return (
          <ScrollableContainerWrapper
            componentDidMount={componentDidMount}
            expected={expected}
            dataHook={dataHook}
            {...commonProps}
            {...props}
          />
        );
      },
      { eyes: { waitBeforeScreenshot: `[data-test-ready="true"]` } },
    );
  });
});
