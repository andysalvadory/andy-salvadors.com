import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownLayout from '../DropdownLayout';

const commonProps = {
  options: [
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ],
  visible: true,
};

const fixedNodeStyles = {
  backgroundColor: 'red',
  padding: '10px',
};

const containerStyles = {
  width: '240px',
  margin: 'auto',
  lineHeight: '22px',
  border: '1px solid rgba(0, 0, 0, 0.6)',
  borderRadius: 6,
  overflow: 'auto',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.6)',
  padding: '6px 0',
};

const booleanProps = [true, false];

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'fixed node',
    its: [
      {
        it: 'fixedHeader',
        props: {
          fixedHeader: <div style={fixedNodeStyles}>I am a header</div>,
        },
      },
      {
        it: 'fixedFooter',
        props: {
          fixedFooter: <div style={fixedNodeStyles}>I am a footer</div>,
        },
      },
    ],
  },
  {
    describe: 'dropDirectionUp',
    its: booleanProps.map(value => ({
      it: value.toString(),
      props: { dropDirectionUp: value },
    })),
  },
  {
    describe: 'visible',
    its: booleanProps.map(value => ({
      it: value.toString(),
      props: { visible: value },
    })),
  },
  {
    describe: 'size',
    its: [
      {
        it: 'maxHeightPixels',
        props: { maxHeightPixels: 150 },
      },
      {
        it: 'minWidthPixels',
        props: { minWidthPixels: 300 },
      },
    ],
  },
  {
    describe: 'selectedId',
    its: [
      {
        it: 'selectedId',
        props: { selectedId: 0 },
      },
    ],
  },
  {
    describe: 'option',
    its: [
      {
        it: 'title',
        props: {
          options: [
            { id: 'first title', value: 'title', title: true },
            { id: 1, value: 'Option 1' },
            { id: 2, value: 'Option 2' },
          ],
        },
      },
      {
        it: 'disabled',
        props: {
          options: [
            { id: 'disabled', value: 'Disabled', disabled: true },
            { id: 1, value: 'Option 1' },
            { id: 2, value: 'Option 2' },
          ],
        },
      },
      {
        it: 'divider',
        props: {
          options: [
            { id: 1, value: 'Option 1' },
            { id: 2, value: '-' },
            { id: 3, value: 'Option 2' },
          ],
        },
      },
    ],
  },
  {
    describe: 'inContainer',
    its: [
      {
        it: 'default',
        props: { inContainer: true },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`DropdownLayout ${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div
          style={
            props.inContainer
              ? containerStyles
              : { width: '240px', margin: 'auto' }
          }
        >
          <DropdownLayout {...commonProps} {...props} />
        </div>
      ),
    );
  });
});
