import { tooltipPopoverSymbols } from '../symbols';
import { tooltipPopoverComponentsNames as componentsNames } from '../components';

export const tooltipPopoverSymbolsToComponents = {
  [tooltipPopoverSymbols.tooltip]: [componentsNames.Tooltip],

  [tooltipPopoverSymbols.popover]: [componentsNames.Popover],

  [tooltipPopoverSymbols.popoverMenu]: [componentsNames.PopoverMenu],

  [tooltipPopoverSymbols.floatingHelper]: [
    componentsNames.FloatingHelper,
    componentsNames.FloatingHelperContent,
  ],
};
