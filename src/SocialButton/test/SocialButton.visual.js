import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialButton from '../SocialButton';

const icons = ['facebook', 'instagram', 'linkedin', 'twitter', 'pinterest'];

const tests = [
  {
    describe: 'icon',
    its: icons.map(icon => ({ it: icon, props: { icon } })),
  },
  {
    describe: 'disabled',
    its: icons.map(icon => ({ it: icon, props: { icon, disabled: true } })),
  },
  {
    describe: 'text',
    its: icons.map(icon => ({ it: icon, props: { icon, text: 'Share me' } })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SocialButton/${describe}`, module).add(it, () => (
      <SocialButton {...props} />
    ));
  });
});
