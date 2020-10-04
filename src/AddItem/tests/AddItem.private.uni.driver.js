import { addItemUniDriverFactory as publicDriverFactory } from '../AddItem.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/TooltipNext/Tooltip.uni.driver';

export const addItemPrivateUniDriverFactory = base => {
  const tooltipSelector = '[data-hook="additem-tooltip"]';
  const tooltipDriver = tooltipDriverFactory(base.$(tooltipSelector));
  return {
    ...publicDriverFactory(base),
    tooltipElementExists: () => tooltipDriver.exists(),
    mouseEnter: () => tooltipDriver.mouseEnter(),
    getTooltipText: () => tooltipDriver.getTooltipText(),
  };
};
