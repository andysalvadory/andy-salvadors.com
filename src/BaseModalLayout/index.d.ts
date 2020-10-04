import * as React from 'react';
import { ButtonProps } from '../Button';
import { OmitPolyfill } from '../common';

export interface BaseModalLayoutProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook' | 'onClick'>;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonProps?: OmitPolyfill<
    ButtonProps,
    'dataHook' | 'onClick' | 'priority'
  >;
  secondaryButtonOnClick?: () => void;
  onCloseButtonClick?: () => void;
  removeContentPadding?: boolean;
  footnote?: React.ReactNode;
  sideActions?: React.ReactNode;
  children: React.ReactNode;
  additionalButtons?: React.ReactNode;
}

export default class BaseModalLayout extends React.PureComponent<
  BaseModalLayoutProps
> {}
