import * as React from 'react';
import CustomModalLayout from '../../src/CustomModalLayout';
import { customModalLayoutTestkitFactory } from '../../dist/testkit';
import { customModalLayoutTestkitFactory as customModalLayoutEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { customModalLayoutTestkitFactory as customModalLayoutPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import AnnouncementModalLayout from "../../src/AnnouncementModalLayout";

function customModalLayoutWithMandatoryProps() {
  return <CustomModalLayout children={<div />} />;
}

function customModalLayoutWithAllProps() {
  return (
    <CustomModalLayout
      className="cn"
      dataHook="dh"
      title="title"
      subtitle="subtitle"
      primaryButtonText="primaryButtonText"
      primaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        priority: 'primary',
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      primaryButtonOnClick={() => {}}
      secondaryButtonText="secondaryButtonText"
      secondaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      secondaryButtonOnClick={() => {}}
      onCloseButtonClick={() => {}}
      removeContentPadding
      footnote={<div />}
      sideActions={<div />}
      width="3px"
      children={<div />}
      additionalButtons={<div />}
    />
  );
}

async function testkits() {
  const testkit = customModalLayoutTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = customModalLayoutEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await customModalLayoutPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
