import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './FormField';

const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Label',
    its: [
      test('Long text should use ellipsis', {
        label:
          'a long label that should use ellipsis, you can see the whole sentence in the tooltip',
      }),
      test('Info Content should render', {
        infoContent: 'hi',
      }),
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FormField/${describe}`, module).add(it, () => (
      <div style={{ width: 250, padding: 50 }}>
        <FormField {...props} />
      </div>
    ));
  });
});
