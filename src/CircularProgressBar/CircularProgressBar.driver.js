import {
  circularProgressBarDriverFactory as coreCircularProgressBarDriverFactory,
  tooltipDriverFactory as coreTooltipDriverFactory,
} from 'wix-ui-core/drivers/vanilla';
import { dataHooks } from './constants';

export const circularProgressBarDriverFactory = ({
  element,
  eventTrigger,
  wrapper,
}) => {
  const getElementByDataHook = dataHook =>
    element.querySelector(`[data-hook='${dataHook}']`);

  const createTooltipDriver = () =>
    coreTooltipDriverFactory({
      element: getElementByDataHook(dataHooks.tooltip),
      wrapper,
      eventTrigger,
    });

  const coreProgressBarDriver = coreCircularProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });

  const errorIcon = () => getElementByDataHook(dataHooks.errorIcon);
  const successIcon = () => getElementByDataHook(dataHooks.successIcon);
  const progressBar = () => getElementByDataHook(dataHooks.circularProgressBar);

  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => getTooltip().isContentElementExists(),
    getTooltip,
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
    getSize: () => progressBar().getAttribute('data-size'),
    getTooltipErrorMessage: async () => {
      await getTooltip().mouseEnter();
      return getTooltip().getContentElement().textContent;
    },
  };
};

export default circularProgressBarDriverFactory;
