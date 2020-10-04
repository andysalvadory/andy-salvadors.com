import * as React from 'react';
import WixComponent, { WixComponentProps } from '../BaseComponents/WixComponent';

export interface SelectorProps extends WixComponentProps {
  id: string | number;
  title: string;
  image?: React.ReactNode;
  imageSize?: SelectorImageSize;
  imageShape?: SelectorImageShape;
  isSelected?: boolean;
  isDisabled?: boolean;
  subtitle?: string;
  extraNode?: React.ReactNode;
  onToggle?: (id: SelectorProps['id']) => void;
  toggleType?: SelectorToggleType;
  showBelowNodeOnSelect?: boolean;
  belowNode?: React.ReactNode;
  subtitleNode?: React.ReactNode;
}

export default class Selector extends WixComponent<SelectorProps> {
  static ExtraText: typeof SelectorExtraText;
  static ProgressBar: typeof SelectorProgressBar;
}

export interface SelectorExtraTextProps extends WixComponentProps {
  text: string;
}
export class SelectorExtraText extends WixComponent<SelectorExtraTextProps> {}

export interface SelectorProgressBarProps extends WixComponentProps {
  progress: number;
}
export class SelectorProgressBar extends WixComponent<
  SelectorProgressBarProps
> {}

export type SelectorImageSize =
  | 'tiny'
  | 'small'
  | 'portrait'
  | 'large'
  | 'cinema';
export type SelectorImageShape = 'rectangular' | 'circle';
export type SelectorToggleType = 'checkbox' | 'radio';
