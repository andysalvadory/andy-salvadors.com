/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Stepper from '../Stepper';
import { stepperTestkitFactory } from '../../../testkit';

const interactiveDataHook = 'interactive-stepper';

const createDriver = dataHook =>
  stepperTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { componentDidMount, ...rest } = this.props;

    return (
      <div style={{ marginLeft: '100px', marginTop: '100px' }}>
        <Stepper dataHook={interactiveDataHook} {...rest} />
      </div>
    );
  }
}

const tests = [
  {
    describe: 'render',
    its: [
      {
        it: 'disabled',
        props: {
          steps: [
            { text: 'This is a long step name' },
            { text: 'This is a long step name', type: 'disabled' },
            { text: 'This is a long step name', type: 'disabled' },
            { text: 'This is a long step name', type: 'disabled' },
            { text: 'This is a long step name', type: 'disabled' },
            { text: 'This is a long step name', type: 'disabled' },
            { text: 'This is a long step name', type: 'disabled' },
          ],
          onClick: () => {},
          activeStep: 0,
        },
      },
      {
        it: 'completed',
        props: {
          steps: [
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name' },
          ],
          onClick: () => {},
          activeStep: 6,
        },
      },
      {
        it: 'error',
        props: {
          steps: [
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name' },
          ],
          onClick: () => {},
          activeStep: 6,
        },
      },
      {
        it: 'error & active',
        props: {
          steps: [
            { text: 'This is a long step name', type: 'error' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
          ],
          onClick: () => {},
          activeStep: 0,
        },
      },
      {
        it: 'completed & active',
        props: {
          steps: [
            { text: 'This is a long step name', type: 'completed' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
            { text: 'This is a long step name' },
          ],
          onClick: () => {},
          activeStep: 0,
        },
      },
    ],
  },
  {
    describe: 'responsive',
    its: [
      {
        it: '4 steps',
        props: {
          steps: [
            { text: 'First step' },
            { text: 'Second step' },
            { text: 'Third step' },
            { text: 'Forth step' },
          ],
          onClick: () => {},
          activeStep: 1,
        },
      },
      {
        it: '7 steps',
        props: {
          steps: [
            { text: 'First step' },
            { text: 'Second step' },
            { text: 'Third step' },
            { text: 'Forth step' },
            { text: 'Fifth step' },
            { text: 'Six step' },
            { text: 'Seventh step' },
          ],
          onClick: () => {},
          activeStep: 1,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'hover',
    its: [
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'normal',
        props: {
          steps: [{ text: 'step1' }, { text: 'step2' }, { text: 'step3' }],
          activeStep: 1,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'disabled',
        props: {
          steps: [
            { text: 'step1', type: 'disabled' },
            { text: 'step2' },
            { text: 'step3' },
          ],
          activeStep: 1,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'active',
        props: {
          steps: [{ text: 'step1' }, { text: 'step2' }, { text: 'step3' }],
          activeStep: 0,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'error',
        props: {
          steps: [
            { text: 'step1', type: 'error' },
            { text: 'step2' },
            { text: 'step3' },
          ],
          activeStep: 1,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'error & active',
        props: {
          steps: [
            { text: 'step1', type: 'error' },
            { text: 'step2' },
            { text: 'step3' },
          ],
          activeStep: 0,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'completed',
        props: {
          steps: [
            { text: 'step1', type: 'completed' },
            { text: 'step2' },
            { text: 'step3' },
          ],
          activeStep: 1,
        },
      },
      {
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.hoverStep(0);
        },
        it: 'completed & active',
        props: {
          steps: [
            { text: 'step1', type: 'completed' },
            { text: 'step2' },
            { text: 'step3' },
          ],
          activeStep: 0,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Stepper/${describe}`, module).add(it, () => (
      <div
        style={{
          marginLeft: '100px',
          marginTop: '100px',
          padding: '20px 20px',
          width: '966px',
          border: '1px solid black',
        }}
      >
        <Stepper {...props} />
      </div>
    ));
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`Stepper/${describe}`, module).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
