import React from 'react';
import { storiesOf } from '@storybook/react';

import SidebarHeader from '../SidebarHeader';
import Box from '../../Box';
import LinearProgressBar from '../../LinearProgressBar';

const baseProps = {
  title: 'Site Name',
};

const tests = [
  {
    describe: 'Title',
    its: [
      {
        it: 'Should display the title',
        props: {
          ...baseProps,
        },
      },
      {
        it: 'Should display the title with ellipsis',
        props: {
          title:
            'This is a very long subtitle which exceeds the maximum width of its container',
        },
      },
    ],
  },
  {
    describe: 'Subtitle',
    its: [
      {
        it: 'Should display the subtitle',
        props: {
          ...baseProps,
          subtitle: 'Role: Owner',
        },
      },
    ],
  },
  {
    describe: 'Children',
    its: [
      {
        it: 'Should display the children',
        props: {
          ...baseProps,
          subtitle: 'Role: Owner',
          children: (
            <Box marginTop={3}>
              <LinearProgressBar showProgressIndication value={50} />
            </Box>
          ),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) =>
  storiesOf(`SidebarHeader`, module).add(describe, () => (
    <div>
      {its.map(({ props }) => (
        <Box marginBottom={5}>
          <SidebarHeader {...props} />
        </Box>
      ))}
    </div>
  )),
);
