import * as React from 'react';
import { TooltipCommonProps } from '../common';


export interface AddItemProps {
  disabled?: boolean;
  theme?: AddItemTheme;
  alignItems?: AddItemAlignItems;
  size?: AddItemSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dataHook?: string;
  tooltipProps?: TooltipCommonProps;
  /** @deprecated do not use this prop, use tooltipProps prop instead. */
  tooltipAppendTo?: AddItemAppendTo;
  /** @deprecated do not use this prop, use tooltipProps prop instead. */
  tooltipFlip?: boolean;
  /** @deprecated do not use this prop, use tooltipProps prop instead. */
  tooltipFixed?: boolean;
  /** @deprecated do not use this prop, use tooltipProps prop instead. */
  tooltipContent?: string;
  /** @deprecated do not use this prop, use tooltipProps prop instead. */
  tooltipPlacement?: string;
  showIcon?: boolean;
  removePadding?: boolean;
}

export default class AddItem extends React.Component<AddItemProps> {}

export type AddItemTheme = 'dashes' | 'plain' | 'filled' | 'image';
export type AddItemAlignItems = 'center' | 'right' | 'left';
export type AddItemSize = 'large' | 'medium' | 'small' | 'tiny';
export type AddItemAppendTo = 'window' | 'scrollParent' | 'viewport' | 'parent';
