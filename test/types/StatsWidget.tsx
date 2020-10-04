import * as React from 'react';
import StatsWidget from '../../src/StatsWidget';
import { statsWidgetTestkitFactory } from '../../dist/testkit';
import { statsWidgetTestkitFactory as statsWidgetEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { statsWidgetTestkitFactory as statsWidgetPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function statsWidgetWithMandatoryProps() {
  return <StatsWidget />;
}

function statsWidgetWithAllProps() {
  return <StatsWidget />;
}

async function testkits() {
  const testkit = statsWidgetTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = statsWidgetEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await statsWidgetPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
