import * as React from 'react';
import Range from '../../src/Range';
import { rangeTestkitFactory } from '../../dist/testkit';
import { rangeTestkitFactory as rangeEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import * as enzyme from 'enzyme';

function RangeWithMandatoryProps() {
  return <Range />;
}

function RangeWithAllProps() {
  return (
    <Range
      required
      info={"info"}
      dataHook={"hook"}
      appendToParent
      children={<div/>}
    />
  );
}

async function testkits() {
  const testkit = rangeTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = rangeEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });
}
