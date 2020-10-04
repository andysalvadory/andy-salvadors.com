import * as React from 'react';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import StatusIndicator from '../../src/StatusIndicator';
import { statusIndicatorTestkitFactory } from '../../dist/testkit';
import { statusIndicatorTestkitFactory as statusIndicatorEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { statusIndicatorTestkitFactory as statusIndicatorPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';

function StatusIndicatorWithMandatoryProps() {
  return <StatusIndicator />;
}

function StatusIndicatorWithAllProps() {
  return (
    <StatusIndicator
      className="class-name"
      dataHook="data-hook"
      status="error"
      message="message"
      tooltipPlacement="top"
    />
  );
}

async function testkits() {
  const testkit = statusIndicatorTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = statusIndicatorEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await statusIndicatorPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
