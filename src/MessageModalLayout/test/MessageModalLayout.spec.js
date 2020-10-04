import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MessageModalLayout from '../MessageModalLayout';
import { messageModalLayoutPrivateDriverFactory } from './MessageModalLayout.private.uni.driver';
import { dataHooks } from '../constants';
import { dataHooks as baseDataHooks } from '../../BaseModalLayout/constants';

describe('MessageModalLayout', () => {
  const render = createRendererWithUniDriver(
    messageModalLayoutPrivateDriverFactory,
  );
  const commonProps = {
    dataHook: dataHooks.messageModalLayout,
    primaryButtonText: 'Confirm',
    primaryButtonProps: { dataHook: baseDataHooks.primaryButton },
    secondaryButtonText: 'Cancel',
    secondaryButtonProps: { dataHook: baseDataHooks.secondaryButton },
  };

  afterEach(() => {
    cleanup();
  });

  describe('Render', () => {
    it('should render', async () => {
      const { driver } = render(
        <MessageModalLayout {...commonProps}>Content</MessageModalLayout>,
      );

      expect(await driver.exists()).toBe(true);
      expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
      expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
    });

    it('should render children', async () => {
      const children = <div data-hook="child">Child div</div>;
      const { driver } = render(
        <MessageModalLayout>{children}</MessageModalLayout>,
      );

      expect(await driver.childExists('[data-hook=child]')).toBe(true);
    });
  });

  describe('Illustration', () => {
    it('Illustration provided - should render with width of 630px', async () => {
      const { driver } = render(
        <MessageModalLayout illustration={'illustration.png'}>
          Content
        </MessageModalLayout>,
      );

      expect(await driver.getModalWidth()).toEqual('630px');
    });
    it('No Illustration provided - should render with width of 510px', async () => {
      const { driver } = render(
        <MessageModalLayout>Content</MessageModalLayout>,
      );

      expect(await driver.getModalWidth()).toEqual('510px');
    });
  });
  describe('Theme', () => {
    it('Default - Standard theme', async () => {
      const { driver } = render(
        <MessageModalLayout {...commonProps}>Content</MessageModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('standard')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('standard')).toBe(true);
    });
    it('Destructive theme', async () => {
      const { driver } = render(
        <MessageModalLayout {...commonProps} theme="destructive">
          Content
        </MessageModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('destructive')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('destructive')).toBe(true);
    });
    it('Premium theme', async () => {
      const { driver } = render(
        <MessageModalLayout {...commonProps} theme="premium">
          Content
        </MessageModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('premium')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('premium')).toBe(true);
    });
  });
});
