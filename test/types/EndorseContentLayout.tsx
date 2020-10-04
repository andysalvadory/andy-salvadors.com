import * as React from 'react';
import EndorseContentLayout from '../../src/EndorseContentLayout';

function EndorseContentLayoutWithMandatoryProps() {
  return <EndorseContentLayout />;
}

function EndorseContentLayoutWithAllProps() {
  return (
    <EndorseContentLayout
      content={<div />}
      head={<div />}
      primaryCta={<div />}
      secondaryCta={<div />}
    />
  );
}
