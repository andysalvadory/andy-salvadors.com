import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '..';

const tests = [
  {
    describe: 'menuArrow attribute',
    its: [
      {
        it: 'should have a narrow error style of arrow is shown',
        props: {
          menuArrow: true,
          error: true,
          status: 'error',
        },
      },
    ],
  },
  {
    describe: 'status attribute',
    its: [
      {
        it: 'deprecated - should display an error icon if error is true',
        props: {
          error: true,
        },
      },
      {
        it: 'should display an error icon if status is error',
        props: {
          status: 'error',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Input/${describe}`, module).add(it, () => <Input {...props} />);
  });
});
