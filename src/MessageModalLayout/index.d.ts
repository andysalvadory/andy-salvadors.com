import * as React from 'react';
import {
  BaseModalLayoutProps,
  IllustrationProps,
  HeaderProps,
  ContentProps,
  FooterProps,
  FootnoteProps,
} from '../BaseModalLayout';

export interface MessageModalLayoutProps
  extends BaseModalLayoutProps,
    IllustrationProps,
    HeaderProps,
    ContentProps,
    FooterProps,
    FootnoteProps {}

declare const MessageModalLayout: React.FC<MessageModalLayoutProps>;
export default MessageModalLayout;
