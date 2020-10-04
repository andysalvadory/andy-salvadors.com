import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageModalLayout from '../MessageModalLayout';
import Text from '../../Text/Text';
import { BASE64_IMAGE } from './data/base64Image';

const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const commonProps = {
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
  onCloseButtonClick: () => {},
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
          illustration: <img src={BASE64_IMAGE} height={120} width={120} />,
        },
      },
      {
        it: 'premium with illustration',
        props: {
          ...commonProps,
          illustration: <img src={BASE64_IMAGE} height={120} width={120} />,
          theme: 'premium',
        },
      },
      {
        it: 'destructive with illustration',
        props: {
          ...commonProps,
          illustration: <img src={BASE64_IMAGE} height={120} width={120} />,
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
