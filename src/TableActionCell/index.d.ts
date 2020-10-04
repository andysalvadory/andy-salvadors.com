import * as React from 'react';
import { IconElement } from '../common';
import { PopoverMenuNextProps as PopoverMenuPropsNew } from '../beta/PopoverMenu';
import { PopoverMenuProps as PopoverMenuPropsOld } from '../PopoverMenu';
import {OmitPolyfill} from '../common';

type CommonTableActionCellProps = {
  dataHook?: string;
  primaryAction?: TableActionCellPrimaryAction;
  secondaryActions?: TableActionCellSecondaryAction[];
  numOfVisibleSecondaryActions?: number;
  alwaysShowSecondaryActions?: boolean;
};

type TableActionCellOld = CommonTableActionCellProps & {
  upgrade?: false;
  popoverMenuProps?: PopoverMenuPropsOld;
};

type TableActionCellNew = CommonTableActionCellProps & {
  upgrade: true;
  popoverMenuProps?: OmitPolyfill<PopoverMenuPropsNew, 'triggerElement'>;
};

export type TableActionCellProps = TableActionCellOld | TableActionCellNew;

export const TableActionCell: React.SFC<TableActionCellProps>;
export default TableActionCell;

export type TableActionCellPrimaryAction = {
  text: string;
  onClick: () => void;
  theme?: 'whiteblue' | 'fullblue';
  disabled?: boolean;
};

export type TableActionCellSecondaryAction = {
  text: string;
  icon: IconElement;
  onClick: () => void;
  disabled?: boolean;
  dataHook?: string;
};
