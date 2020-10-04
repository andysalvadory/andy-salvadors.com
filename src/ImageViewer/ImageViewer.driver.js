import addItemDriverFactory from '../AddItem/AddItem.driver';
import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

const imageViewerDriverFactory = ({ element, eventTrigger }) => {
  const addItemDataHook = 'add-image';
  const updateDataHook = 'update-image';
  const imageDataHook = 'image-viewer-image';
  const updateTooltipDataHook = 'update-image-tooltip';
  const removeTooltipDataHook = 'remove-image-tooltip';
  const errorTooltipDataHook = 'error-image-tooltip';
  const removeDataHook = 'remove-image';

  const byHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  const addItemDriver = addItemDriverFactory({
    element,
    eventTrigger,
  });

  const tooltipTestkit = dataHook =>
    tooltipTestkitFactory({
      wrapper: element,
      dataHook,
    });

  const updateTooltip = tooltipTestkit(updateTooltipDataHook);
  const removeTooltip = tooltipTestkit(removeTooltipDataHook);
  const errorTooltip = tooltipTestkit(errorTooltipDataHook);
  const addItem = addItemDriverFactory({
    element: byHook('add-image'),
    eventTrigger,
  });

  return {
    exists: () => !!element,
    getElement: () => element,
    getAddItemDataHook: () => addItemDataHook,
    getContainerStyles: () => element.getAttribute('style'),
    getImageUrl: () => byHook(imageDataHook).getAttribute('src'),
    getErrorTooltipContent: () => {
      errorTooltip.mouseEnter();
      return errorTooltip.getContentElement().textContent;
    },
    getAddTooltipContent: () => addItemDriver.getTooltipContent(),
    getUpdateTooltipContent: () => {
      updateTooltip.mouseEnter();
      return updateTooltip.getContentElement().textContent;
    },
    getRemoveTooltipContent: () => {
      removeTooltip.mouseEnter();
      return removeTooltip.getContentElement().textContent;
    },
    isAddItemVisible: () => !!byHook(addItemDataHook),
    isImageVisible: () => !!byHook(imageDataHook),
    isErrorVisible: () => !!byHook(errorTooltipDataHook),
    isDisabled: () => element.getAttribute('data-disabled') === 'true',
    clickAdd: () => addItem.click(),
    clickUpdate: () => eventTrigger.click(byHook(updateDataHook)),
    updateButtonExists: () => !!byHook(updateDataHook),
    clickRemove: () => eventTrigger.click(byHook(removeDataHook)),
    removeButtonExists: () => !!byHook(removeDataHook),
    updateExists: () => !!byHook(updateDataHook),
  };
};

export default imageViewerDriverFactory;
