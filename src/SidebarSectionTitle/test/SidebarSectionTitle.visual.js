import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarSectionTitle from '../SidebarSectionTitle';
import Box from '../../Box';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display with text',
        props: {
          children: 'Some Text',
        },
      },
      {
        it: 'Should display an ellipsis for long text',
        props: {
          children:
            'This is a very long text which exceeds the maximum width of its container',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarSectionTitle`, module).add(describe, () => (
    <div>
      {its.map(({ props }) => (
        <Box direction="vertical" marginBottom={5}>
          <SidebarSectionTitle {...props} />
        </Box>
      ))}
    </div>
  )),
);
