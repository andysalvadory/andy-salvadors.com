import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnnouncementModalLayout from '../AnnouncementModalLayout';
import { announcementModalLayoutPrivateDriverFactory } from './AnnouncementModalLayout.private.uni.driver';

describe('AnnouncementModalLayout', () => {
  const render = createRendererWithUniDriver(
    announcementModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the Illustration component when illustration-related props are passed', async () => {
    const illustration = 'some illustration';
    const { driver } = render(
      <AnnouncementModalLayout illustration={illustration} />,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.illustration.exists()).toBe(true);
  });

  it('should render the Header component when header-related props are passed', async () => {
    const title = 'some title';
    const { driver } = render(<AnnouncementModalLayout title={title} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.header.exists()).toBe(true);
    expect(await driver.header.getHeaderText()).toBe(title);
    expect(await driver.header._getTitleAppearance()).toBe('H2');
  });

  it('should render the Content component with provided children', async () => {
    const children = 'Child';
    const { driver } = render(
      <AnnouncementModalLayout>{children}</AnnouncementModalLayout>,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.content.exists()).toBe(true);
    expect(await driver.content.getContentText()).toBe(children);
  });

  it('should render the Footer component when footer-related props are passed', async () => {
    const pButtonText = 'pButtonText';
    const { driver } = render(
      <AnnouncementModalLayout primaryButtonText={pButtonText} />,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.footer.exists()).toBe(true);
    expect(await driver.footer.getPrimaryButtonText()).toBe(pButtonText);
  });

  it('should render the Footnote component when footnote-related props are passed', async () => {
    const footnote = 'footnote text';
    const { driver } = render(<AnnouncementModalLayout footnote={footnote} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.footnote.exists()).toBe(true);
    expect(await driver.footnote.getFootnoteText()).toBe(footnote);
  });

  it('should render the Link component when link-related props are passed', async () => {
    const linkText = 'link text';
    const { driver } = render(<AnnouncementModalLayout linkText={linkText} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.link.exists()).toBe(true);
    expect(await driver.link.getLinkText()).toBe(linkText);
  });

  it('should trigger the `linkOnClick` handler when link clicked', async () => {
    const linkOnClickSpy = jest.fn();
    const { driver } = render(
      <AnnouncementModalLayout linkOnClick={linkOnClickSpy} />,
    );
    await driver.link.clickLink();
    expect(linkOnClickSpy).toHaveBeenCalled();
  });
});
