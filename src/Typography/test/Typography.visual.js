import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  renderSizeAndWeightTable,
  renderColorTable,
} from './TextClassesExample';
import { renderHeadingTable } from './HeadingClassesExample';

const tests = [
  {
    describe: 'Typography',
    its: [
      {
        it: 'Text variations',
        story: () => {
          return (
            <>
              <h1>Typography text with classes</h1>
              <br />
              <div style={{ display: 'flex' }}>
                {renderSizeAndWeightTable()}
                <div style={{ width: '20px' }} />
                {renderColorTable()}
              </div>
            </>
          );
        },
      },
      {
        it: 'Heading variations',
        story: () => {
          return (
            <>
              <h1>Typography heading with classes</h1>
              <br />
              <div style={{ display: 'flex' }}>{renderHeadingTable()}</div>
            </>
          );
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
