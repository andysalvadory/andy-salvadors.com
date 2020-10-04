import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarDivider from '../SidebarDivider';
import Box from '../../Box';

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display as inner',
        props: {},
      },
      {
        it: 'Should display as full width',
        props: {
          fullWidth: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarDivider`, module).add(describe, () => (
    <div>
      {its.map(({ props }) => (
        <Box direction="vertical" marginBottom={5}>
          <div style={{ width: '222px', backgroundColor: '#23263c' }}>
            <SidebarDivider {...props} />
          </div>
        </Box>
      ))}
    </div>
  )),
);
