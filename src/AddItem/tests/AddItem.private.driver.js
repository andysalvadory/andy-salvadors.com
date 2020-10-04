import addItemDriverFactory from '../AddItem.driver';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

export const addItemPrivateDriverFactory = ({ element, eventTrigger }) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: `additem-tooltip`,
  });
  return {
    ...addItemDriverFactory({ element, eventTrigger }),
    tooltipElementExists: () => tooltipTestkit.exists(),
    getTooltipText: () => {
      tooltipTestkit.mouseEnter();
      const text = tooltipTestkit.getContentElement();
      tooltipTestkit.mouseLeave();
      return text;
    },
  };
};
