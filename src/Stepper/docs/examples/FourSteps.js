/* eslint-disable no-undef */
import React from 'react';
import Card from 'wix-style-react/Card';
import Stepper from 'wix-style-react/Stepper';

class StepperWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
    };
  }

  render() {
    return (
      <Card>
        <Card.Header
          title={
            <Stepper
              activeStep={this.state.activeStep}
              steps={[
                { text: 'First step', type: 'completed' },
                { text: 'Second step' },
                { text: 'Third step', type: 'error' },
                { text: 'Fourth step' },
              ]}
              onClick={activeStep => {
                this.setState({ activeStep: activeStep });
              }}
            />
          }
        />
        <Card.Content>
          Here goes the content of step # {this.state.activeStep + 1}
        </Card.Content>
      </Card>
    );
  }
}

render(<StepperWithState />);
