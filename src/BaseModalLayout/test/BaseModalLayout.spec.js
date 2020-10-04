import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import BaseModalLayout from '../BaseModalLayout';
import { baseModalLayoutPrivateDriverFactory } from './BaseModalLayout.private.uni.driver';

import Checkbox from '../../Checkbox';
import { dataHooks } from '../constants';

describe('BaseModalLayout', () => {
  const render = createRendererWithUniDriver(
    baseModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <BaseModalLayout
        dataHook={dataHooks.baseModalLayout}
        primaryButtonText={'Confirm'}
        secondaryButtonText={'Cancel'}
      >
        Content
      </BaseModalLayout>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
    expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
  });
  it('should render children', async () => {
    const children = <div data-hook="child">Child div</div>;
    const { driver } = render(<BaseModalLayout>{children}</BaseModalLayout>);

    expect(await driver.childExists('[data-hook=child]')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(
      <BaseModalLayout className={expectedClass}>Content</BaseModalLayout>,
    );

    expect(await driver.hasClass(expectedClass)).toBe(true);
  });

  it('should render title', async () => {
    const title = 'Modal Title';
    const { driver } = render(
      <BaseModalLayout title={title}>Content</BaseModalLayout>,
    );

    expect(await driver.getTitleText()).toEqual(title);
  });

  it('should render title node', async () => {
    const titleText = 'Modal Title';
    const titleNode = <div data-hook="baseModalLayout-title">{titleText}</div>;
    const { driver } = render(
      <BaseModalLayout title={titleNode}>Content</BaseModalLayout>,
    );

    expect(await driver.getTitleText()).toEqual(titleText);
  });

  it('should render subtitle', async () => {
    const subtitle = 'Subtitle here';
    const title = 'Modal Title';
    const { driver } = render(
      <BaseModalLayout title={title} subtitle={subtitle}>
        Content
      </BaseModalLayout>,
    );

    expect(await driver.getSubtitleText()).toEqual(subtitle);
  });

  it('should click on the primary action button', async () => {
    const props = {
      primaryButtonText: 'Confirm',
      primaryButtonOnClick: jest.fn(),
    };
    const { driver } = render(
      <BaseModalLayout {...props}>Content</BaseModalLayout>,
    );
    await driver.clickPrimaryButton();
    expect(props.primaryButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the secondary action button', async () => {
    const props = {
      secondaryButtonText: 'Cancel',
      secondaryButtonOnClick: jest.fn(),
    };
    const { driver } = render(
      <BaseModalLayout {...props}>Content</BaseModalLayout>,
    );
    await driver.clickSecondaryButton();
    expect(props.secondaryButtonOnClick).toHaveBeenCalledTimes(1);
  });
  it('should click on the close button', async () => {
    const props = {
      onCloseButtonClick: jest.fn(),
    };
    const { driver } = render(
      <BaseModalLayout {...props}>Content</BaseModalLayout>,
    );

    await driver.clickCloseButton();

    expect(props.onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should allow changing the primary button text', async () => {
    const { driver } = render(
      <BaseModalLayout primaryButtonText="Press me">Content</BaseModalLayout>,
    );
    expect(await driver.getPrimaryButtonText()).toEqual('Press me');
  });

  it('should allow changing the secondary button text', async () => {
    const { driver } = render(
      <BaseModalLayout secondaryButtonText="Don't press me">
        Content
      </BaseModalLayout>,
    );
    expect(await driver.getSecondaryButtonText()).toEqual("Don't press me");
  });

  it(`should render 'sideActions'`, async () => {
    const dataHook = 'sideActions';
    const selector = '[data-hook="' + dataHook + '"]';
    const sideActions = (
      <div data-hook={dataHook}>
        <Checkbox>Check this</Checkbox>
      </div>
    );
    const { driver } = render(
      <BaseModalLayout sideActions={sideActions}>Content</BaseModalLayout>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });

  it(`should render 'footnote'`, async () => {
    const dataHook = 'footnote';
    const selector = '[data-hook="' + dataHook + '"]';
    const footnote = <div data-hook={dataHook}>Footnote here</div>;
    const { driver } = render(
      <BaseModalLayout footnote={footnote}>Content</BaseModalLayout>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });
});
