import * as React from 'react';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import VariableInput from '../../src/VariableInput';
import { variableInputTestkitFactory } from '../../dist/testkit';
import { variableInputTestkitFactory as variableInputEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { variableInputTestkitFactory as variableInputPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';

function VariableInputWithMandatoryProps() {
  return <VariableInput />;
}

function VariableInputWithAllProps() {
  return (
    <VariableInput
      className="class-name"
      dataHook="data-hook"
      disabled
      initialValue="hello"
      multiline
      onChange={(value: string) => {}}
      onSubmit={(value: string) => {}}
      onBlur={(value: string) => {}}
      status="error"
      statusMessage="message"
      placeholder="placeholder"
      rows={5}
      size="medium"
      variableParser={(value: string) => true}
      variableTemplate={{
        prefix: 'prefix',
        suffix: 'suffix',
      }}
    />
  );
}

async function testkits() {
  const testkit = variableInputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = variableInputEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await variableInputPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
