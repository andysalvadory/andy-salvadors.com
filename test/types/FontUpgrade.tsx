import * as React from 'react';
import FontUpgrade from '../../src/FontUpgrade';
import { fontUpgradeTestkitFactory } from '../../dist/testkit';
import { fontUpgradeTestkitFactory as fontUpgradeEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { fontUpgradeTestkitFactory as fontUpgradePuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function fontUpgradeWithMandatoryProps() {
  return <FontUpgrade />;
}

function fontUpgradeWithAllProps() {
  return (
    <FontUpgrade
      children=""
      dataHook="dataHook"
      active
    />
  );
}

async function testkits() {
  const testkit = fontUpgradeTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = fontUpgradeEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await fontUpgradePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
