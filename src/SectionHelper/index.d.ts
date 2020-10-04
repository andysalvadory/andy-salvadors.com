import * as React from 'react';
import WixComponent, {WixComponentProps } from '../BaseComponents/WixComponent';

export interface SectionHelperProps extends WixComponentProps {
  appearance?: SectionHelperAppearance;
  title?: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: React.MouseEventHandler<HTMLElement>;
  onAction?: React.MouseEventHandler<HTMLElement>;
  actionText?: string;
  fullWidth?: boolean;
}

export default class SectionHelper extends WixComponent<SectionHelperProps> {}

export type SectionHelperAppearance =
  | 'warning'
  | 'standard'
  | 'danger'
  | 'success'
  | 'premium'
  | 'preview'
  | 'experimentalDark';
