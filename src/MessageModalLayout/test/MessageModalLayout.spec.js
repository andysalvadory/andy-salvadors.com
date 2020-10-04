import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MessageModalLayout from '../MessageModalLayout';
import { messageModalLayoutPrivateDriverFactory } from './MessageModalLayout.private.uni.driver';

describe('MessageModalLayout', () => {
  const render = createRendererWithUniDriver(
    messageModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the Illustration component when illustration-related props are passed', async () => {
    const illustration = 'some illustration';
    const { driver } = render(
      <MessageModalLayout illustration={illustration} />,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.illustration.exists()).toBe(true);
  });

  it('should render the Header component when header-related props are passed', async () => {
    const title = 'some title';
    const { driver } = render(<MessageModalLayout title={title} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.header.exists()).toBe(true);
    expect(await driver.header.getHeaderText()).toBe(title);
  });

  it('should render the Content component with provided children', async () => {
    const children = 'Child';
    const { driver } = render(
      <MessageModalLayout>{children}</MessageModalLayout>,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.content.exists()).toBe(true);
    expect(await driver.content.getContentText()).toBe(children);
  });

  it('should render the Content component without dividers when illustration was passed ', async () => {
    const { driver } = render(
      <MessageModalLayout illustration={'some illustration'}>
        children
      </MessageModalLayout>,
    );
    expect(await driver.content.dividersHidden()).toBe(true);
  });

  it('should render the Footer component when footer-related props are passed', async () => {
    const pButtonText = 'pButtonText';
    const { driver } = render(
      <MessageModalLayout primaryButtonText={pButtonText} />,
    );
    expect(await driver.exists()).toBe(true);
    expect(await driver.footer.exists()).toBe(true);
    expect(await driver.footer.getPrimaryButtonText()).toBe(pButtonText);
  });

  it('should render the Footnote component when footnote-related props are passed', async () => {
    const footnote = 'footnote text';
    const { driver } = render(<MessageModalLayout footnote={footnote} />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.footnote.exists()).toBe(true);
    expect(await driver.footnote.getFootnoteText()).toBe(footnote);
  });
});
