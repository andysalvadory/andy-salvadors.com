import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CustomModalLayout from '../CustomModalLayout';
import { customModalLayoutPrivateDriverFactory } from './CustomModalLayout.private.uni.driver';

describe('CustomModalLayout', () => {
  const render = createRendererWithUniDriver(
    customModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the Header component when header-related props are passed', async () => {
    const title = 'some title';
    const { driver } = render(<CustomModalLayout title={title} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.header.exists()).toBe(true);
    expect(await driver.header.getHeaderText()).toBe(title);
  });

  it('should render the Content component with provided children', async () => {
    const children = 'Child';
    const { driver } = render(
      <CustomModalLayout>{children}</CustomModalLayout>,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.content.exists()).toBe(true);
    expect(await driver.content.getContentText()).toBe(children);
  });

  it('should render the Footer component when footer-related props are passed', async () => {
    const pButtonText = 'pButtonText';
    const { driver } = render(
      <CustomModalLayout primaryButtonText={pButtonText} />,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.footer.exists()).toBe(true);
    expect(await driver.footer.getPrimaryButtonText()).toBe(pButtonText);
  });

  it('should render the Footnote component when footnote-related props are passed', async () => {
    const footnote = 'footnote text';
    const { driver } = render(<CustomModalLayout footnote={footnote} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.footnote.exists()).toBe(true);
    expect(await driver.footnote.getFootnoteText()).toBe(footnote);
  });

  it('should render the content with padding by default', async () => {
    const { driver } = render(<CustomModalLayout>Content</CustomModalLayout>);
    expect(await driver.hasContentPadding()).toBe(true);
  });

  it('should remove the content padding when `removeContentPadding` was passed', async () => {
    const { driver } = render(
      <CustomModalLayout removeContentPadding>Content</CustomModalLayout>,
    );
    expect(await driver.hasContentPadding()).toBe(false);
  });
});
