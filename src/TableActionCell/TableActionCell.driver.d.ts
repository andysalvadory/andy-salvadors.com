import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { DeprecatedButtonDriver } from '../Deprecated/Button/Button.driver';
import { PopoverMenuDriver } from '../PopoverMenu/PopoverMenu.driver';
import { TooltipDriver } from '../Tooltip/Tooltip.driver';

export interface TableActionCellDriver<T> extends BaseDriver {
  element: () => T;
  exists: () => boolean;
  getPrimaryActionButtonDriver: () => DeprecatedButtonDriver;
  clickPrimaryActionButton: () => void;
  getIsPrimaryActionButtonDisabled: () => boolean;
  getVisibleActionsCount: () => number;
  getHiddenActionsCount: () => number;
  getVisibleActionTooltipDriver: (action: number) => TooltipDriver;
  getVisibleActionByDataHookTooltipDriver: (dataHook: string) => TooltipDriver;
  getVisibleActionButtonDriver: (index: number) => DeprecatedButtonDriver;
  getVisibleActionByDataHookButtonDriver: (
    dataHook: string,
  ) => DeprecatedButtonDriver;
  getHiddenActionsPopoverMenuDriver: () => PopoverMenuDriver;
  clickVisibleAction: (actionIndex: number) => void;
  clickVisibleActionByDataHook: (actionDataHook: string) => void;
  clickPopoverMenu: () => void;
  clickHiddenAction: (actionIndex: number) => void;
  clickHiddenActionByDataHook: (actionDataHook: string) => void;
}
