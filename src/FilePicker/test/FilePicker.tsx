import * as React from 'react';
import FilePicker from '..';
import { filePickerTestkitFactory } from '../../../testkit';
import { filePickerTestkitFactory as filePickerEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { filePickerTestkitFactory as filePickerPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function FilePickerWithMandatoryProps() {
  return <FilePicker />;
}

function FilePickerWithAllProps() {
  return (
    <FilePicker
      dataHook="hook"
      error
      errorMessage="msg"
      header="header"
      id={1}
      mainLabel="lbl"
      maxSize={10}
      name="name"
      onChange={_ev => {}}
      subLabel="lbl"
      supportedFormats="png"
    />
  );
}

async function testkits() {
  const testkit = filePickerTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = filePickerEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await filePickerPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
