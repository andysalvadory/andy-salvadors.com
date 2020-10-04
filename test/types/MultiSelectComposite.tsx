import * as React from 'react';
import MultiSelectComposite from '../../src/MultiSelectComposite';
import { multiSelectCompositeTestkitFactory } from '../../dist/testkit';
import { multiSelectCompositeTestkitFactory as multiSelectCompositeEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { multiSelectCompositeTestkitFactory as multiSelectCompositePuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function multiSelectCompositeWithMandatoryProps() {
  return <MultiSelectComposite />;
}

function multiSelectCompositeWithAllProps() {
  return <MultiSelectComposite />;
}

async function testkits() {
  const testkit = multiSelectCompositeTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = multiSelectCompositeEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await multiSelectCompositePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
