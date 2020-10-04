import {
  linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory,
  tooltipDriverFactory as coreTooltipDriverFactory,
} from 'wix-ui-core/drivers/vanilla';
import { dataHooks } from './constants';

const linearProgressBarDriverFactory = ({ element, eventTrigger, wrapper }) => {
  const getElementByDataHook = dataHook =>
    element.querySelector(`[data-hook='${dataHook}']`);
  const createTooltipDriver = () =>
    coreTooltipDriverFactory({
      element: getElementByDataHook(dataHooks.tooltip),
      wrapper,
      eventTrigger,
    });

  const coreProgressBarDriver = coreLinearProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });

  const errorIcon = () => getElementByDataHook(dataHooks.errorIcon);
  const successIcon = () => getElementByDataHook(dataHooks.successIcon);
  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => getTooltip().isContentElementExists(),
    getTooltip,
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
    getTooltipErrorMessage: async () => {
      await getTooltip().mouseEnter();
      return getTooltip().getContentElement().textContent;
    },
    getSkin: () => element.getAttribute('data-skin'),
  };
};

export default linearProgressBarDriverFactory;
