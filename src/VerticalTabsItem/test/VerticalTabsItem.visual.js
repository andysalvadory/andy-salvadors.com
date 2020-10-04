import React from 'react';
import { storiesOf } from '@storybook/react';
import VerticalTabsItem from '../VerticalTabsItem';
import Add from '../../new-icons/Add';

const tests = [
  {
    describe: 'type',
    its: [
      {
        it: 'tab',
        props: {
          type: 'tab',
        },
      },
      {
        it: 'action',
        props: {
          type: 'action',
        },
      },
      {
        it: 'title',
        props: {
          type: 'title',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'true',
        props: {
          disabled: true,
        },
      },
      {
        it: 'false',
        props: {
          disabled: false,
        },
      },
    ],
  },
  {
    describe: 'prefixIcon',
    its: [
      {
        it: 'prefixIcon',
        props: {
          prefixIcon: <Add />,
        },
      },
    ],
  },
  {
    describe: 'suffixIcon',
    its: [
      {
        it: 'suffixIcon',
        props: {
          suffixIcon: <Add />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`VerticalTabsItem/${describe}`, module).add(it, () => (
      <VerticalTabsItem {...props}>Tab Item</VerticalTabsItem>
    ));
  });
});
