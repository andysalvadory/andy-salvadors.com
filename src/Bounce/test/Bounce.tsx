import * as React from 'react';
import Bounce from '..';
import { bounceTestkitFactory } from '../../../testkit';
import { bounceTestkitFactory as bounceEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { bounceTestkitFactory as bouncePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function bounceWithMandatoryProps() {
  return <Bounce />;
}

function bounceWithAllProps() {
  return (
    <Bounce
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = bounceTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = bounceEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await bouncePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
