import * as React from 'react';
import WixComponent, {WixComponentProps } from '../../BaseComponents/WixComponent';

export interface MessageBoxMarketerialLayoutProps extends WixComponentProps {
  title: React.ReactNode;
  content: React.ReactNode;
  primaryButtonLabel?: string;
  primaryButtonDisabled?: boolean;
  primaryButtonNode?: React.ReactNode;
  secondaryButtonLabel?: string;
  onPrimaryButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSecondaryButtonClick?: React.MouseEventHandler<HTMLElement>;
  imageUrl?: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  imageComponent?: React.ReactNode;
  footerBottomChildren?: React.ReactNode;
  theme?: MessageBoxMarketerialLayoutTheme;
  primaryButtonTheme?: MessageBoxMarketerialLayoutThemePrimaryButtonTheme;
  removeButtonsPadding?: boolean;
  width?: string;
  noBodyPadding?: boolean;
}

export default class MessageBoxMarketerialLayout extends WixComponent<
  MessageBoxMarketerialLayoutProps
> {}

export type MessageBoxMarketerialLayoutTheme = 'blue' | 'purple' | 'white';
export type MessageBoxMarketerialLayoutThemePrimaryButtonTheme =
  | 'blue'
  | 'purple';
