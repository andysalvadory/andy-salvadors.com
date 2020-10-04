import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusComplete from '../../new-icons/StatusComplete';

import FloatingNotification from '..';

const LONG_TEXT = 'all work and no play makes jack a dull boy '.repeat(2);

const defaultProps = {
  text: 'Some content text',
  prefixIcon: <StatusComplete />,
  textButtonProps: { label: 'Trash' },
  buttonProps: { label: 'Undo' },
};

const tests = [
  {
    describe: 'themes',
    its: [
      {
        it: 'standard',
        props: {
          type: 'standard',
        },
      },
      {
        it: 'success',
        props: {
          type: 'success',
        },
      },
      {
        it: 'warning',
        props: {
          type: 'warning',
        },
      },
      {
        it: 'destructive',
        props: {
          type: 'premium',
        },
      },

      {
        it: 'premium',
        props: {
          type: 'destructive',
        },
      },
      {
        it: 'preview',
        props: {
          type: 'preview',
        },
      },
    ],
  },
  {
    describe: 'Long text',
    its: [
      {
        it: 'example',
        props: {
          text: LONG_TEXT,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FloatingNotification/${describe}`, module).add(it, () => (
      <FloatingNotification {...defaultProps} {...props} />
    ));
  });
});
