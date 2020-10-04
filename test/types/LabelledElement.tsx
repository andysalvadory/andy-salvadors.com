import * as React from 'react';
import LabelledElement from '../../src/LabelledElement';
import { labelledElementTestkitFactory } from '../../dist/testkit';
import { labelledElementTestkitFactory as labelledElementEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { labelledElementTestkitFactory as labelledElementPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function labelledElementWithMandatoryProps() {
  return <LabelledElement />;
}

function labelledElementWithAllProps() {
  return <LabelledElement dataHook="dataHook" label="label" value="value" />;
}

async function testkits() {
  const testkit = labelledElementTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = labelledElementEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await labelledElementPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
