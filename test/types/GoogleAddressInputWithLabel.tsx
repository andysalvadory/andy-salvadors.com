import * as React from 'react';
import GoogleAddressInputWithLabel from '../../src/GoogleAddressInputWithLabel';
import { googleAddressInputWithLabelTestkitFactory } from '../../dist/testkit';
import { googleAddressInputWithLabelTestkitFactory as googleAddressInputWithLabelEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { googleAddressInputWithLabelTestkitFactory as googleAddressInputWithLabelPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function googleAddressInputWithLabelWithMandatoryProps() {
  return <GoogleAddressInputWithLabel />;
}

function googleAddressInputWithLabelWithAllProps() {
  return <GoogleAddressInputWithLabel />;
}

async function testkits() {
  const testkit = googleAddressInputWithLabelTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = googleAddressInputWithLabelEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await googleAddressInputWithLabelPuppeteerTestkitFactory(
    {
      dataHook: 'hook',
      page,
    },
  );
}
