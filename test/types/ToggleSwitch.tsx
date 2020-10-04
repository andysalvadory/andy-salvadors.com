import * as React from 'react';
import ToggleSwitch from '../../src/ToggleSwitch';
import { toggleSwitchTestkitFactory } from '../../dist/testkit';
import { toggleSwitchTestkitFactory as toggleSwitchEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { toggleSwitchTestkitFactory as toggleSwitchPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function ToggleSwitchWithMandatoryProps() {
  return <ToggleSwitch />;
}

function ToggleSwitchWithAllProps() {
  return (
    <ToggleSwitch
      dataHook="hook"
      skin="standard"
      size="small"
      checked
      disabled
      id="toggle-id"
      onChange={(ignored: React.ChangeEvent) => null}
      tabIndex={1}
    />
  );
}

async function testkits() {
  const testkit = toggleSwitchTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = toggleSwitchEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await toggleSwitchPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
