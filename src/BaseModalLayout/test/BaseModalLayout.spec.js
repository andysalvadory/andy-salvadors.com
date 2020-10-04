import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import BaseModalLayout, {
  Header,
  Content,
  Footer,
  Footnote,
  Illustration,
} from '../index';
import { baseModalLayoutPrivateDriverFactory } from './BaseModalLayout.private.uni.driver';
import Text from '../../Text';

describe('BaseModalLayout', () => {
  const render = createRendererWithUniDriver(
    baseModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<BaseModalLayout />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render children', async () => {
    const children = <div data-hook="child">Child</div>;
    const { driver } = render(<BaseModalLayout>{children}</BaseModalLayout>);
    expect(await driver._childExists('child')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(<BaseModalLayout className={expectedClass} />);
    expect(await driver._hasClass(expectedClass)).toBe(true);
  });

  it('should render the close button', async () => {
    const { driver } = render(
      <BaseModalLayout onCloseButtonClick={() => {}} />,
    );
    expect(await driver._closeButtonExists()).toBe(true);
  });

  it('should not render the close button when no `onCloseButtonClick` provided', async () => {
    const { driver } = render(<BaseModalLayout />);
    expect(await driver._closeButtonExists()).toBe(false);
  });

  it('should click on the close button', async () => {
    const onCloseButtonClickSpy = jest.fn();
    const { driver } = render(
      <BaseModalLayout onCloseButtonClick={onCloseButtonClickSpy}>
        Content
      </BaseModalLayout>,
    );
    await driver.clickCloseButton();
    expect(onCloseButtonClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should set the layout `theme`', async () => {
    const theme = 'standard';
    const { driver } = render(<BaseModalLayout theme={theme} />);
    expect(await driver.getTheme()).toBe(theme);
  });

  it('should override the props of internal components that use the context consumer', async () => {
    const title = 'The right title';
    const { driver } = render(
      <BaseModalLayout title={title}>
        <Header title={'The wrong title'} />
      </BaseModalLayout>,
    );
    expect(await driver._getText()).toEqual(title);
  });

  /* Testing the BaseModalLayout Blocks here */
  describe('Layout Blocks', () => {
    describe('Header', () => {
      it('should not render the header when `title` and `subtitle` are not provided', async () => {
        const { driver } = render(
          <BaseModalLayout>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.exists()).toBe(false);
      });

      it('should render the header when `title` is provided', async () => {
        const { driver } = render(
          <BaseModalLayout title={'title'}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.exists()).toBe(true);
        expect(await driver.header._titleExists()).toBe(true);
      });

      it('should render the header when `subtitle` is provided', async () => {
        const { driver } = render(
          <BaseModalLayout subtitle={'subtitle'}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.exists()).toBe(true);
        expect(await driver.header._subtitleExists()).toBe(true);
      });

      it('should render the provided `title` text', async () => {
        const title = 'Modal Title';
        const { driver } = render(
          <BaseModalLayout title={title}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.getTitleText()).toEqual(title);
      });

      it('should render the provided `title` node', async () => {
        const titleText = 'Modal Title';
        const titleNode = <div>{titleText}</div>;
        const { driver } = render(
          <BaseModalLayout title={titleNode}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.getHeaderText()).toEqual(titleText);
      });

      it('should render the `title` in the right default appearance', async () => {
        const { driver } = render(
          <BaseModalLayout title={'title'}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header._getTitleAppearance()).toBe('H3');
      });

      it('should render the `title` in the right provided appearance', async () => {
        const appearance = 'H4';
        const { driver } = render(
          <BaseModalLayout title={'title'} titleAppearance={appearance}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header._getTitleAppearance()).toBe(appearance);
      });

      it('should render `subtitle`', async () => {
        const subtitle = 'Subtitle here';
        const { driver } = render(
          <BaseModalLayout subtitle={subtitle}>
            <Header />
          </BaseModalLayout>,
        );
        expect(await driver.header.getSubtitleText()).toEqual(subtitle);
      });
    });

    describe('Content', () => {
      it('should render the content with the provided `content`', async () => {
        const content = 'content';
        const { driver } = render(
          <BaseModalLayout content={content}>
            <Content />
          </BaseModalLayout>,
        );
        expect(await driver.content.exists()).toBe(true);
        expect(await driver.content.getContentText()).toBe(content);
      });

      it('should not render the content when no `content` passed', async () => {
        const { driver } = render(
          <BaseModalLayout>
            <Content />
          </BaseModalLayout>,
        );
        expect(await driver.content.exists()).toBe(false);
      });

      it('should render the content at the provided `contentMaxHeight` prop', async () => {
        const content = 'content';
        const contentMaxHeight = '50px';
        const { driver } = render(
          <BaseModalLayout
            content={content}
            contentMaxHeight={contentMaxHeight}
          >
            <Content />
          </BaseModalLayout>,
        );
        expect(await driver.content.getMaxHeight()).toBe(contentMaxHeight);
      });

      it('should render the content with dividers', async () => {
        const content = 'content';
        const { driver } = render(
          <BaseModalLayout content={content}>
            <Content />
          </BaseModalLayout>,
        );
        expect(await driver.content.dividersHidden()).toBe(false);
      });

      it('should render the content without dividers when `contentHideDividers` prop passed', async () => {
        const content = 'content';
        const { driver } = render(
          <BaseModalLayout content={content} contentHideDividers>
            <Content />
          </BaseModalLayout>,
        );
        expect(await driver.content.dividersHidden()).toBe(true);
      });
    });

    describe('Footer', () => {
      it('should not render `footer` when no actions-related props passed', async () => {
        const { driver } = render(
          <BaseModalLayout
            theme={'standard'}
            actionsSize={'large'}
            showFooterDivider
          >
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(false);
      });

      it('should render `footer` and the provided `sideActions` when passed', async () => {
        const sideActionsText = 'Side Actions';
        const sideActionsContent = <Text>{sideActionsText}</Text>;
        const { driver } = render(
          <BaseModalLayout sideActions={sideActionsContent}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._sideActionsExists()).toBe(true);
        expect(await driver.footer.getSideActionsText()).toBe(sideActionsText);
      });

      it('should render `footer` and the secondary-button when `secondaryButtonText` passed', async () => {
        const secondaryButtonText = 'secondaryButtonText';
        const { driver } = render(
          <BaseModalLayout secondaryButtonText={secondaryButtonText}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._secondaryButtonExists()).toBe(true);
        expect(await driver.footer.getSecondaryButtonText()).toBe(
          secondaryButtonText,
        );
      });

      it('should render `footer` and the secondary-button when `secondaryButtonOnClick` passed', async () => {
        const secondaryButtonOnClickSpy = jest.fn();
        const { driver } = render(
          <BaseModalLayout secondaryButtonOnClick={secondaryButtonOnClickSpy}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._secondaryButtonExists()).toBe(true);
        await driver.footer.clickSecondaryButton();
        expect(secondaryButtonOnClickSpy).toHaveBeenCalled();
      });

      it('should render `footer` and the secondary-button when `secondaryButtonProps` passed', async () => {
        const secondaryButtonProps = {};
        const { driver } = render(
          <BaseModalLayout secondaryButtonProps={secondaryButtonProps}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._secondaryButtonExists()).toBe(true);
      });

      it('should render `footer` and the primary-button when `primaryButtonText` passed', async () => {
        const primaryButtonText = 'primaryButtonText';
        const { driver } = render(
          <BaseModalLayout primaryButtonText={primaryButtonText}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._primaryButtonExists()).toBe(true);
        expect(await driver.footer.getPrimaryButtonText()).toBe(
          primaryButtonText,
        );
      });

      it('should render `footer` and the primary-button when `primaryButtonOnClick` passed', async () => {
        const primaryButtonOnClickSpy = jest.fn();
        const { driver } = render(
          <BaseModalLayout primaryButtonOnClick={primaryButtonOnClickSpy}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._primaryButtonExists()).toBe(true);
        await driver.footer.clickPrimaryButton();
        expect(primaryButtonOnClickSpy).toHaveBeenCalled();
      });

      it('should render `footer` and the primary-button when `primaryButtonProps` passed', async () => {
        const primaryButtonProps = {};
        const { driver } = render(
          <BaseModalLayout primaryButtonProps={primaryButtonProps}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer.exists()).toBe(true);
        expect(await driver.footer._primaryButtonExists()).toBe(true);
      });

      it('should not render the `footer-divider` when `showFooterDivider` is not passed', async () => {
        const { driver } = render(
          <BaseModalLayout primaryButtonText={'text'}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer._dividerExists()).toBe(false);
      });

      it('should render the `footer-divider` when `showFooterDivider` passed', async () => {
        const { driver } = render(
          <BaseModalLayout primaryButtonText={'text'} showFooterDivider>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer._dividerExists()).toBe(true);
      });

      it('should pass the provided `theme` to the `footer` action-buttons', async () => {
        const theme = 'premium';
        const { driver } = render(
          <BaseModalLayout
            theme={theme}
            primaryButtonText={'p'}
            secondaryButtonText={'s'}
          >
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer._primaryButtonHasSkin(theme)).toBe(true);
        expect(await driver.footer._secondaryButtonHasSkin(theme)).toBe(true);
      });

      it('should pass the provided `actionsSize` to the `footer` action-buttons', async () => {
        const actionsSize = 'medium';
        const { driver } = render(
          <BaseModalLayout
            actionsSize={actionsSize}
            primaryButtonText={'p'}
            secondaryButtonText={'s'}
          >
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer._getPrimaryButtonSize()).toBe(actionsSize);
        expect(await driver.footer._getSecondaryButtonSize()).toBe(actionsSize);
      });

      it('should render the `footer` action-buttons in the right priority', async () => {
        const { driver } = render(
          <BaseModalLayout primaryButtonText={'p'} secondaryButtonText={'s'}>
            <Footer />
          </BaseModalLayout>,
        );
        expect(await driver.footer._getPrimaryButtonPriority()).toBe('primary');
        expect(await driver.footer._getSecondaryButtonPriority()).toBe(
          'secondary',
        );
      });
    });

    describe('Footnote', () => {
      it('should not render `footnote` when prop is not provided', async () => {
        const { driver } = render(
          <BaseModalLayout>
            <Footnote />
          </BaseModalLayout>,
        );
        expect(await driver.footnote.exists()).toBe(false);
      });

      it('should render `footnote` with the given content when prop is provided', async () => {
        const footnote = 'footnote text';
        const { driver } = render(
          <BaseModalLayout footnote={footnote}>
            <Footnote />
          </BaseModalLayout>,
        );
        expect(await driver.footnote.exists()).toBe(true);
        expect(await driver.footnote.getFootnoteText()).toBe(footnote);
      });
    });

    describe('Illustration', () => {
      it('should not render `illustration` when prop is not provided', async () => {
        const { driver } = render(
          <BaseModalLayout>
            <Illustration />
          </BaseModalLayout>,
        );
        expect(await driver.illustration.exists()).toBe(false);
      });

      it('should render `illustration` when prop is passed', async () => {
        const { driver } = render(
          <BaseModalLayout illustration={'illustration-source'}>
            <Illustration />
          </BaseModalLayout>,
        );
        expect(await driver.illustration.exists()).toBe(true);
      });

      it('should render `illustration` in size `small` as default', async () => {
        const { driver } = render(
          <BaseModalLayout illustration={'illustration-source'}>
            <Illustration />
          </BaseModalLayout>,
        );
        expect(await driver.illustration.getIllustrationSize()).toBe('small');
      });

      it('should render `illustration` in the right `illustrationSize` when passed', async () => {
        const illustrationSize = 'large';
        const { driver } = render(
          <BaseModalLayout
            illustration={'illustration-source'}
            illustrationSize={illustrationSize}
          >
            <Illustration />
          </BaseModalLayout>,
        );
        expect(await driver.illustration.getIllustrationSize()).toBe(
          illustrationSize,
        );
      });
    });
  });
});
