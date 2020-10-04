import React from 'react';
import { storiesOf } from '@storybook/react';
import Swatches from '../Swatches';

const commonProps = {
  colors: [
    '#000',
    '#fff',
    'red',
    'cyan',
    'rgb(200, 100, 0)',
    'turquoise',
    'beige',
  ],
};

const tests = [
  {
    describe: 'small', // prop name (e.g. size)
    its: [
      {
        it: '6 columns', //prop variation (e.g. small)
        props: {
          width: 204,
        },
      },
      {
        it: '4 columns', //prop variation (e.g. small)
        props: {
          width: 144,
        },
      },
      {
        it: '1 column', //prop variation (e.g. small)
        props: {
          width: 24,
        },
      },
      {
        it: 'selected color', //prop variation (e.g. small)
        props: {
          selected: '#FFFFFF',
        },
      },
      {
        it: 'showClear',
        props: {
          showClear: true,
        },
      },
    ],
  },
  {
    describe: 'medium', // prop name (e.g. size)
    its: [
      {
        it: '5 columns', //prop variation (e.g. small)
        props: {
          width: 248,
          size: 'medium',
        },
      },
      {
        it: 'selected color', //prop variation (e.g. small)
        props: {
          selected: '#FFFFFF',
          size: 'medium',
        },
      },
      {
        it: 'showClear',
        props: {
          size: 'medium',
          showClear: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Swatches/${describe}`, module).add(it, () => (
      <div style={{ width: `${props.width}px` }}>
        <Swatches {...commonProps} {...props} />
      </div>
    ));
  });
});
