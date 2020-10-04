import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageModalLayout from '../MessageModalLayout';
import { dataHooks } from '../constants';
import Text from '../../Text/Text';
import { BASE64_IMAGE } from './data/base64Image';

const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const commonProps = {
  dataHook: dataHooks.messageModalLayout,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {
          ...commonProps,
        },
      },
    ],
  },
  {
    describe: 'illustration',
    its: [
      {
        it: 'with illustration',
        props: {
          ...commonProps,
          illustration: BASE64_IMAGE,
        },
      },
      {
        it: 'premium with illustration',
        props: {
          ...commonProps,
          illustration: BASE64_IMAGE,
          theme: 'premium',
        },
      },
      {
        it: 'destructive with illustration',
        props: {
          ...commonProps,
          illustration: BASE64_IMAGE,
          theme: 'destructive',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`MessageModal${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <MessageModalLayout {...commonProps} {...props} />,
    );
  });
});
