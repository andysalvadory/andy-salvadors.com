import * as React from 'react';
import Tag from '../../src/Tag';
import { tagTestkitFactory } from '../../dist/testkit';
import { tagTestkitFactory as tagEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { tagTestkitFactory as tagPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function TagWithMandatoryProps() {
  return <Tag id="asd">text</Tag>;
}

function TagWithAllProps() {
  return (
    <Tag
      dataHook={"hook"}
      id="asd"
      className="cls"
      disabled
      maxWidth={1}
      onClick={_ev => {}}
      onRemove={_id => {}}
      removable
      size="large"
      theme="dark"
      thumb={<div />}>
      text
    </Tag>
  );
}

async function testkits() {
  const testkit = tagTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = tagEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await tagPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}
