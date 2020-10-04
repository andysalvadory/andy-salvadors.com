import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageViewer from '..';

const imageUrl =
  'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg';

const tests = [
  {
    describe: 'should render  ',
    its: [
      {
        it: 'with an image',
        props: {
          imageUrl,
        },
      },
      {
        it: 'with an error',
        props: {
          error: true,
        },
      },
      {
        it: 'disabled with an image',
        props: {
          imageUrl,
          disabled: true,
        },
      },
      {
        it: 'disabled with an error',
        props: {
          error: true,
          disabled: true,
        },
      },
      {
        it: 'disabled without an error',
        props: {
          disabled: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ImageViewer/${describe}`, module).add(it, () => (
      <ImageViewer {...props} />
    ));
  });
});
