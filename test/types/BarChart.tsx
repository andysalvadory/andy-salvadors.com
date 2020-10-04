import * as React from 'react';
import BarChart from '../../src/BarChart';
import { barChartTestkitFactory } from '../../dist/testkit';
import { barChartTestkitFactory as barChartEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { barChartTestkitFactory as barChartPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function barChartWithMandatoryProps() {
  return (
    <BarChart
      items={[
        {
          value: 5,
        },
      ]}
    />
  );
}

function barChartWithAllProps() {
  return (
    <BarChart
      items={[
        {
          value: 5,
          label: '',
          labelShort: '',
          description: '',
          descriptionInfo: '',
          onDescriptionInfoShown: () => {},
        },
      ]}
    />
  );
}

async function testkits() {
  const testkit = barChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = barChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await barChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
