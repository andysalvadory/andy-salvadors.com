import * as React from 'react';

import WixComponent, {
  WixComponentProps,
} from '../BaseComponents/WixComponent';
import { IconElement } from '../common';

export interface PopoverMenuItemProps extends WixComponentProps {
  icon?: IconElement;
  text?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: PopoverMenuItemSize;
  disabled?: boolean;
  divider?: boolean;
}

export default class PopoverMenuItem extends WixComponent<
  PopoverMenuItemProps
> {}

export type PopoverMenuItemSize = 'normal' | 'large';
