import * as React from 'react';
import { IconElement } from '../common';
import { EllipsisProps } from '../common/Ellipsis';
import { ButtonWithAsProp } from '../Button';

export type ListItemActionProps = ButtonWithAsProp<{
  title: string;
  dataHook?: string;
  skin?: ListItemActionSkin;
  size?: ListItemActionSize;
  prefixIcon?: IconElement;
  autoFocus?: boolean;
  ellipsis?: boolean;
  disabled?: boolean;
  tooltipModifiers?: EllipsisProps;
  highlighted?: boolean;
}>;

export default class ListItemAction extends React.PureComponent<
  ListItemActionProps
> {}

export type ListItemActionSkin = 'standard' | 'dark' | 'destructive';
export type ListItemActionSize = 'small' | 'medium';

export const listItemActionBuilder: <T extends Partial<
  ListItemActionProps
>>(data: {
  title: string;
  id: string | number;
  prefixIcon?: IconElement;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  skin?: ListItemActionSkin;
  size?: ListItemActionSize;
  dataHook?: string;
  as?: any;
  tabIndex?: number;
  autoFocus?: boolean;
  className?: string;
  ellipsis?: boolean;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  overrideStyle: true;
  value: (props: T) => React.ReactNode;
};
