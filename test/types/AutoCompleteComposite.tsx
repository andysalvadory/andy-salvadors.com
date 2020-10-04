import * as React from 'react';
import AutoCompleteComposite from '../../src/AutoCompleteComposite';
import { autoCompleteCompositeTestkitFactory } from '../../dist/testkit';
import { autoCompleteCompositeTestkitFactory as autoCompleteCompositeEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { autoCompleteCompositeTestkitFactory as autoCompleteCompositePuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function AutoCompleteCompositeWithMandatoryProps() {
  return <AutoCompleteComposite />;
}

function AutoCompleteCompositeWithAllProps() {
  return <AutoCompleteComposite />;
}

async function testkits() {
  const testkit = autoCompleteCompositeTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = autoCompleteCompositeEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await autoCompleteCompositePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
