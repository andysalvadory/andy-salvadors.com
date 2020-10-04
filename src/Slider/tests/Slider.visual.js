import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../Slider';
import Box from '../../Box';
import { Cell, Layout } from '../../Layout';

const commonProps = {
  min: 0,
  max: 10,
  value: 4,
  displayMarks: false,
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'displayMarks',
        props: {
          displayMarks: true,
        },
      },
      {
        it: 'step = 2',
        props: {
          step: 2,
          displayMarks: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  let _describe = '';
  if (describe) {
    _describe += `/${describe}`;
  }
  its.forEach(({ it, props, container }) => {
    storiesOf(`Slider${_describe}`, module).add(it, () => (
      <Box direction={'vertical'}>
        {[0, 4, 10].map(value => (
          <Box margin={4} {...container}>
            <Layout>
              <Cell>
                <Slider {...commonProps} {...props} value={value} />
              </Cell>
            </Layout>
          </Box>
        ))}
      </Box>
    ));
  });
});
