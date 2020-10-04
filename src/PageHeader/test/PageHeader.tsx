import * as React from 'react';
import PageHeader from '..';
import { pageHeaderTestkitFactory } from '../../../testkit';
import { pageHeaderTestkitFactory as pageHeaderEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { pageHeaderTestkitFactory as pageHeaderPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function PageHeaderWithMandatoryProps() {
  return <PageHeader />;
}

function PageHeaderWithAllProps() {
  return (
    <PageHeader
      actionsBar={<div />}
      breadcrumbs={<div />}
      className="cls"
      dataHook="hook"
      hasBackgroundImage
      minimized
      onBackClicked={_ev => {}}
      showBackButton
      subtitle={<div />}
      title={<div />}
    />
  );
}

function PageHeaderWithRenderFunctions() {
  return (
    <PageHeader
      actionsBar={({ hasBackgroundImage, minimized }) => {}}
      breadcrumbs={<div />}
      className="cls"
      dataHook="hook"
      hasBackgroundImage
      minimized
      onBackClicked={_ev => {}}
      showBackButton
      subtitle={<div />}
      title={_minimized => {}}
    />
  );
}

async function testkits() {
  const testkit = pageHeaderTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = pageHeaderEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await pageHeaderPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
