import * as React from 'react';
import { MoveByOffset } from '../common';
import { TooltipOldProps } from '../Tooltip';

export interface PopoverMenuProps {
  dataHook?: string;
  size?: PopoverMenuSize;
  placement?: PopoverMenuPlacement;
  buttonTheme?: PopoverMenuButtonTheme;
  buttonHeight?: PopoverMenuHeight;
  maxWidth?: string | number;
  appendToParent?: boolean;
  appendTo?: TooltipOldProps['appendTo'];
  zIndex?: number;
  showArrow?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  moveBy?: MoveByOffset;
}

export default class PopoverMenu extends React.Component<PopoverMenuProps> {}

export type PopoverMenuSize = 'normal' | 'large';
export type PopoverMenuPlacement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverMenuButtonTheme =
  | 'icon-greybackground'
  | 'icon-standard'
  | 'icon-standardsecondary'
  | 'icon-white'
  | 'icon-whitesecondary';
export type PopoverMenuHeight = 'small' | 'medium' | 'large';
