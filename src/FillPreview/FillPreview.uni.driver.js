import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const fillPreviewDriverFactory = (base, body) => {
  const tooltipTestkit = tooltipDriverFactory(base, body);

  return {
    ...baseUniDriverFactory(base),
    click: () => base.$('[data-hook="fill-preview-button"]').click(),
    hasTooltip: async () => {
      await tooltipTestkit.mouseEnter();
      return tooltipTestkit.tooltipExists();
    },
    isSelected: async () => base.attr('data-selected').then(x => x === 'true'),
    getTooltipText: async () => tooltipTestkit.getTooltipText(),
  };
};
