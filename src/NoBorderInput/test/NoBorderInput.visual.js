import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { noBorderInputTestkitFactory } from '../../../testkit';
import NoBorderInput from '../NoBorderInput';
import { storySettings } from '../docs/storySettings';

const createDriver = () =>
  noBorderInputTestkitFactory({
    dataHook: storySettings.dataHook,
    wrapper: document.body,
  });

const NoBorderInputTest = ({ componentDidMount, ...props }) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return (
    <div style={{ backgroundColor: '#f0f4f7', margin: 25 }}>
      <NoBorderInput
        dataHook={storySettings.dataHook}
        value={value}
        placeholder="Please enter some text"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

const tests = [
  {
    describe: 'NoBorderInput',
    its: [
      {
        it: 'Basic',
      },
      {
        it: 'Focus with label',
        props: {
          label: 'Test label',
        },
        componentDidMount: async () => {
          await createDriver().focus();
        },
      },
      {
        it: 'Enter text with label',
        props: {
          label: 'Test label',
        },
        componentDidMount: async () => {
          await createDriver().enterText('Some custom text');
        },
      },
      {
        it: 'Error',
        props: {
          status: NoBorderInput.StatusError,
          statusMessage: 'Some error!',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(describe, module).add(it, () => (
      <NoBorderInputTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
