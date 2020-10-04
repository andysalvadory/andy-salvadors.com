/* eslint-disable no-console */ /* eslint-disable no-undef */
import React from 'react';
import Stepper from 'wix-style-react/Stepper';

render(
  <div style={{ background: '#FFF', padding: '10px 10px' }}>
    <Stepper
      activeStep={2}
      steps={[
        { text: 'Completed step', type: 'completed' },
        { text: 'Error step', type: 'error' },
        { text: 'Normal step' },
        { text: 'Disabled step', type: 'disabled' },
      ]}
      onClick={activeStep => {
        console.log('activeStep', activeStep);
      }}
    />
  </div>,
);
