import * as React from 'react';
import {
  BaseModalLayoutProps,
  IllustrationProps,
  HeaderProps,
  ContentProps,
  FooterProps,
  FootnoteProps,
} from '../BaseModalLayout';

export interface AnnouncementModalLayoutProps
  extends BaseModalLayoutProps,
    IllustrationProps,
    HeaderProps,
    ContentProps,
    FooterProps,
    FootnoteProps {
  linkText?: string;
  linkOnClick?: () => void;
}

declare const AnnouncementModalLayout: React.FC<AnnouncementModalLayoutProps>;
export default AnnouncementModalLayout;
