import * as React from 'react';
import WarningIndicator from '../../src/WarningIndicator';
import { warningIndicatorTestkitFactory } from '../../dist/testkit';
import { warningIndicatorTestkitFactory as warningIndicatorEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { warningIndicatorTestkitFactory as warningIndicatorPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function warningIndicatorWithMandatoryProps() {
  return <WarningIndicator />;
}

function warningIndicatorWithAllProps() {
  return <WarningIndicator />;
}

async function testkits() {
  const testkit = warningIndicatorTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = warningIndicatorEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await warningIndicatorPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
