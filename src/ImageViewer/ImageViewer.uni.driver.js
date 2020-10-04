import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { addItemUniDriverFactory } from '../AddItem/AddItem.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const imageViewerUniDriverFactory = (base, body) => {
  const find = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const imageSelector = 'image-viewer-image';
  const updateImageSelector = 'update-image';
  const updateTooltipSelector = 'update-image-tooltip';
  const removeTooltipSelector = 'remove-image-tooltip';
  const errorTooltipSelector = 'error-image-tooltip';
  const removeImageSelector = 'remove-image';
  const addItemSelector = 'add-image';

  const addItemTestkit = addItemUniDriverFactory(find(addItemSelector), body);
  const tooltipTestkit = dataHook => tooltipDriverFactory(find(dataHook), body);
  const iconButtonTestkit = dataHook => iconButtonDriverFactory(find(dataHook));

  const removeIconButton = iconButtonTestkit(removeImageSelector);
  const updateIconButton = iconButtonTestkit(updateImageSelector);
  const updateTooltip = tooltipTestkit(updateTooltipSelector);
  const removeTooltip = tooltipTestkit(removeTooltipSelector);
  const errorTooltip = tooltipTestkit(errorTooltipSelector);

  return {
    ...baseUniDriverFactory(base),
    updateExists: () => !!find(updateImageSelector),
    isImageVisible: () => find(imageSelector).exists(),
    isAddItemVisible: () => find(addItemSelector).exists(),
    isErrorVisible: () => errorTooltip.exists(),
    isDisabled: () => base.attr('data-disabled').then(x => x === 'true'),
    getImageUrl: () => find(imageSelector).attr('src'),
    clickUpdate: () => updateIconButton.click(),
    updateButtonExists: () => updateIconButton.exists(),
    clickRemove: () => removeIconButton.click(),
    removeButtonExists: () => removeIconButton.exists(),
    clickAdd: () => addItemTestkit.click(),
    getAddTooltipContent: () => addItemTestkit.getTooltipContent(),
    getUpdateTooltipContent: () => updateTooltip.getTooltipText(),
    getRemoveTooltipContent: () => removeTooltip.getTooltipText(),
    getErrorTooltipContent: () => errorTooltip.getTooltipText(),
    getContainerStyles: () => base.attr('style'),
  };
};
