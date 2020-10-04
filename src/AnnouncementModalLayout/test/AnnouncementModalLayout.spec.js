import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnnouncementModalLayout from '../AnnouncementModalLayout';
import { announcementModalLayoutPrivateDriverFactory } from './AnnouncementModalLayout.private.uni.driver';
import { dataHooks } from '../constants';

describe('AnnouncementModalLayout', () => {
  const render = createRendererWithUniDriver(
    announcementModalLayoutPrivateDriverFactory,
  );

  const commonProps = {
    dataHook: dataHooks.announcementModalLayout,
    primaryButtonText: 'Start Now',
    primaryButtonProps: { dataHook: dataHooks.primaryButton },
    secondaryButtonText: 'Skip',
    secondaryButtonProps: { dataHook: dataHooks.secondaryButton },
  };

  afterEach(() => {
    cleanup();
  });

  describe('Render', () => {
    it('should render', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.exists()).toBe(true);
      expect(await driver.getPrimaryButtonText()).toEqual(
        commonProps.primaryButtonText,
      );
      expect(await driver.getSecondaryButtonText()).toEqual(
        commonProps.secondaryButtonText,
      );
    });

    it('should render children', async () => {
      const children = <div data-hook="child">Child div</div>;
      const { driver } = render(
        <AnnouncementModalLayout>{children}</AnnouncementModalLayout>,
      );

      expect(await driver.childExists('[data-hook=child]')).toBe(true);
    });
  });

  describe('Title', () => {
    it('Node provided - should render with that node', async () => {
      const title = <div data-hook={dataHooks.title}>Title</div>;
      const { driver } = render(
        <AnnouncementModalLayout title={title}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + dataHooks.title + ']'),
      ).toBe(true);
    });
    it('String provided - should render wrapped in H2', async () => {
      const title = 'Title';
      const { driver } = render(
        <AnnouncementModalLayout title={title}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('h2[data-hook=' + dataHooks.title + ']'),
      ).toBe(true);
    });
  });

  describe('Illustration', () => {
    it('Should render illustration', async () => {
      const illustration = <div data-hook={dataHooks.illustration}></div>;
      const { driver } = render(
        <AnnouncementModalLayout illustration={illustration}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + dataHooks.illustration + ']'),
      ).toBe(true);
    });
  });

  describe('Link', () => {
    it('Should render', async () => {
      const { driver } = render(
        <AnnouncementModalLayout linkText="Learn More">
          Content
        </AnnouncementModalLayout>,
      );

      expect(
        await driver.childExists('[data-hook=' + dataHooks.link + ']'),
      ).toBe(true);
    });
    it('Click should trigger linkOnClick', async () => {
      const linkOnClick = jest.fn();
      const { driver } = render(
        <AnnouncementModalLayout
          linkText="Learn More"
          linkOnClick={linkOnClick}
        >
          Content
        </AnnouncementModalLayout>,
      );

      await driver.clickLink(), expect(linkOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Theme', () => {
    it('Default - Standard theme', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps}>
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('standard')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('standard')).toBe(true);
    });
    it('Premium theme', async () => {
      const { driver } = render(
        <AnnouncementModalLayout {...commonProps} theme="premium">
          Content
        </AnnouncementModalLayout>,
      );

      expect(await driver.primaryButtonHasSkin('premium')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('premium')).toBe(true);
    });
  });
});
