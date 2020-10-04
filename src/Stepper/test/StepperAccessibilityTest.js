import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '../Stepper';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

class StepperWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  render() {
    return (
      <Stepper
        dataHook={storySettings.dataHook}
        activeStep={this.state.activeStep}
        steps={[
          { text: 'First step', type: 'completed' },
          { text: 'Second step', type: 'disabled' },
          { text: 'Third step' },
          { text: 'Fourth step', type: 'error' },
        ]}
        onClick={activeStep => {
          this.setState({ activeStep: activeStep });
        }}
      />
    );
  }
}

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.ACCESSIBILITY, () => (
  <div style={{ marginLeft: 100, marginTop: 100 }}>
    <StepperWithState />
  </div>
));
