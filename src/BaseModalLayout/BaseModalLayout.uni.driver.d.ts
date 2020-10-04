import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

interface HeaderBlockUniDriver {
  exists(): Promise<boolean>;
  getHeaderText(): Promise<string>;
  getTitleText(): Promise<string>;
  getSubtitleText(): Promise<string>;
}

interface ContentBlockUniDriver {
  exists(): Promise<boolean>;
  getContentText(): Promise<string>;
  getMaxHeight(): Promise<string>;
  dividersHidden(): Promise<boolean>;
  scroll(): Promise<void>;
}

interface FooterBlockUniDriver {
  exists(): Promise<boolean>;
  getSideActionsText(): Promise<string>;
  getSecondaryButtonText(): Promise<string>;
  clickSecondaryButton(): Promise<void>;
  getPrimaryButtonText(): Promise<string>;
  clickPrimaryButton(): Promise<void>;
}

interface FootnoteBlockUniDriver {
  exists(): Promise<boolean>;
  getFootnoteText(): Promise<string>;
}

interface IllustrationBlockUniDriver {
  exists(): Promise<boolean>;
  getIllustrationSize(): Promise<string>;
}

export interface BaseModalLayoutUniDriver extends BaseUniDriver {
  getTheme(): Promise<string>;
  clickCloseButton(): Promise<void>;
  header: HeaderBlockUniDriver;
  content: ContentBlockUniDriver;
  footer: FooterBlockUniDriver;
  footnote: FootnoteBlockUniDriver;
  illustration: IllustrationBlockUniDriver;
}

export const baseModalLayoutDriverFactory: (
  base: BaseUniDriver,
) => BaseModalLayoutUniDriver;
