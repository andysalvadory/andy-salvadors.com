import React from 'react';
import { storiesOf } from '@storybook/react';
import FillPreview from '../FillPreview';

const commonProps = {
  //use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'Add Icon',
    its: [
      {
        it: 'Simple add icon',
        props: {
          mode: 'add',
        },
      },
      {
        it: 'Small Add icon',
        props: {
          mode: 'add',
          addIconSize: 'small',
          fill: '#28c197',
        },
      },
      {
        it: 'Normal Add icon',
        props: {
          mode: 'add',
          addIconSize: 'normal',
          fill: '#28c197',
        },
      },
    ],
  },
  {
    describe: 'Selected and disabled states',
    its: [
      {
        it: 'Simply selected',
        props: {
          fill: '#ffd7d7',
          selected: true,
        },
      },
      {
        it: 'Selected with no color',
        props: {
          selected: true,
        },
      },
      {
        it: 'Selected and disabled in add mode',
        props: {
          selected: true,
          mode: 'add',
          disabled: true,
        },
      },
      {
        it: 'Disabled state should work for fill mode',
        props: {
          fill: '#ffd7d7',
          disabled: true,
        },
      },
    ],
  },
  {
    describe: 'Gradients',
    its: [
      {
        it: 'linear-gradient',
        props: {
          fill:
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
        },
      },
      {
        it: 'radial-gradient',
        props: {
          fill: 'radial-gradient(gold, orange, red)',
        },
      },
      {
        it: 'repeating-linear-gradient',
        props: {
          fill:
            'repeating-linear-gradient(-45deg, transparent, transparent 5px, black 5px, black 10px)',
        },
      },
      {
        it: 'repeating-radial-gradient',
        props: {
          fill:
            'repeating-radial-gradient(black, black 5px, white 5px, white 10px)',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FillPreview/${describe}`, module).add(it, () => (
      <FillPreview {...commonProps} {...props} />
    ));
  });
});
