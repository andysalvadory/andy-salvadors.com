import * as React from 'react';
import { ModalTheme } from '../BaseModalLayout';
import { OmitPolyfill } from '../common';
import { ButtonProps, ButtonSize } from '../Button';

export interface MessageModalLayoutProps {
  className?: string;
  dataHook?: string;
  theme?: ModalTheme;
  onCloseButtonClick?(): void;
  onHelpButtonClick?(): void;
  title?: string;
  content?: string | React.ReactNode;
  primaryButtonText?: string;
  primaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  primaryButtonOnClick?(): void;
  secondaryButtonText?: string;
  secondaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  secondaryButtonOnClick?(): void;
  actionsSize?: ButtonSize;
  sideActions?: React.ReactNode;
  footnote?: React.ReactNode;
  illustration?: string | React.ReactNode;
}

declare const MessageModalLayout: React.FC<MessageModalLayoutProps>;
export default MessageModalLayout;
