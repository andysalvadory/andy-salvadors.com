import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import TimeInput from '..';

const value1 = moment(0).set({ hour: 9, minute: 45 });
const value2 = moment(0).set({ hour: 16, minute: 21 });

const tests = [
  {
    describe: 'TimeInput',
    its: [
      {
        it: 'different variations',
        story: () => (
          <>
            <TimeInput defaultValue={value1} />
            <br />
            <TimeInput defaultValue={value1} disabled />
            <br />
            <TimeInput defaultValue={value1} disabled dashesWhenDisabled />
            <br />
            <TimeInput defaultValue={value1} disableAmPm />
            <br />
            <TimeInput defaultValue={value2} rtl />
            <br />
            <TimeInput defaultValue={value2} rtl disabled />
            <br />
            <TimeInput defaultValue={value2} rtl disabled dashesWhenDisabled />
            <br />
            <TimeInput defaultValue={value2} rtl disableAmPm />
          </>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
