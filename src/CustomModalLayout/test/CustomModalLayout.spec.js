import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CustomModalLayout from '../CustomModalLayout';
import { customModalLayoutPrivateDriverFactory } from './CustomModalLayout.private.uni.driver';
import Checkbox from '../../Checkbox';
import { dataHooks } from '../constants';
import { dataHooks as baseDataHooks } from '../../BaseModalLayout/constants';

describe('CustomModalLayout', () => {
  const render = createRendererWithUniDriver(
    customModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <CustomModalLayout
        dataHook={dataHooks.customModalLayout}
        primaryButtonText={'Confirm'}
        primaryButtonProps={{ dataHook: baseDataHooks.primaryButton }}
        secondaryButtonText={'Cancel'}
        secondaryButtonProps={{ dataHook: baseDataHooks.secondaryButton }}
      >
        Content
      </CustomModalLayout>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
    expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
  });
  it('should render children', async () => {
    const children = <div data-hook="child">Child div</div>;
    const { driver } = render(
      <CustomModalLayout>{children}</CustomModalLayout>,
    );

    expect(await driver.childExists('[data-hook=child]')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(
      <CustomModalLayout className={expectedClass}>Content</CustomModalLayout>,
    );

    expect(await driver.hasClass(expectedClass)).toBe(true);
  });

  it('should render with the given width', async () => {
    const width = '600px';
    const { driver } = render(
      <CustomModalLayout width={width}>Content</CustomModalLayout>,
    );

    expect(await driver.getModalWidth()).toEqual(width);
  });

  it('should render title', async () => {
    const title = 'Modal Title';
    const { driver } = render(
      <CustomModalLayout title={title}>Content</CustomModalLayout>,
    );

    expect(await driver.getTitleText()).toEqual(title);
  });

  it('should render title node', async () => {
    const titleText = 'Modal Title';
    const titleNode = <div data-hook={baseDataHooks.title}>{titleText}</div>;
    const { driver } = render(
      <CustomModalLayout title={titleNode}>Content</CustomModalLayout>,
    );

    expect(
      await driver.childExists('[data-hook=' + baseDataHooks.title + ']'),
    ).toBe(true);
    expect(await driver.getTitleText()).toEqual(titleText);
  });

  it('should render subtitle', async () => {
    const subtitle = 'Subtitle here';
    const title = 'Modal Title';
    const { driver } = render(
      <CustomModalLayout title={title} subtitle={subtitle}>
        Content
      </CustomModalLayout>,
    );

    expect(await driver.getSubtitleText()).toEqual(subtitle);
  });

  it('should click on the primary action button', async () => {
    const props = {
      primaryButtonText: 'Confirm',
      primaryButtonOnClick: jest.fn(),
      primaryButtonProps: { dataHook: baseDataHooks.primaryButton },
    };
    const { driver } = render(
      <CustomModalLayout {...props}>Content</CustomModalLayout>,
    );
    await driver.clickPrimaryButton();
    expect(props.primaryButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the secondary action button', async () => {
    const props = {
      secondaryButtonText: 'Cancel',
      secondaryButtonOnClick: jest.fn(),
      secondaryButtonProps: { dataHook: baseDataHooks.secondaryButton },
    };
    const { driver } = render(
      <CustomModalLayout {...props}>Content</CustomModalLayout>,
    );
    await driver.clickSecondaryButton();
    expect(props.secondaryButtonOnClick).toHaveBeenCalledTimes(1);
  });
  it('should click on the close button', async () => {
    const props = {
      onCloseButtonClick: jest.fn(),
    };
    const { driver } = render(
      <CustomModalLayout {...props}>Content</CustomModalLayout>,
    );

    await driver.clickCloseButton();

    expect(props.onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should allow changing the primary button text', async () => {
    const { driver } = render(
      <CustomModalLayout
        primaryButtonText="Press me"
        primaryButtonProps={{ dataHook: baseDataHooks.primaryButton }}
      >
        Content
      </CustomModalLayout>,
    );
    expect(await driver.getPrimaryButtonText()).toEqual('Press me');
  });

  it('should allow changing the secondary button text', async () => {
    const { driver } = render(
      <CustomModalLayout
        secondaryButtonText="Don't press me"
        secondaryButtonProps={{ dataHook: baseDataHooks.secondaryButton }}
      >
        Content
      </CustomModalLayout>,
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
      <CustomModalLayout sideActions={sideActions}>Content</CustomModalLayout>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });

  it(`should render 'footnote'`, async () => {
    const dataHook = 'footnote';
    const selector = '[data-hook="' + dataHook + '"]';
    const footnote = <div data-hook={dataHook}>Footnote here</div>;
    const { driver } = render(
      <CustomModalLayout footnote={footnote}>Content</CustomModalLayout>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });
});
