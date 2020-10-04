import publicDriverFactory from './CardGalleryItem.uni.driver';

import DataHooks from './CardGalletyItemDataHooks';

export default base => ({
  ...publicDriverFactory(base),

  getHoveredContent: () => base.$(`[data-hook=${DataHooks.hoverContent}]`),
  hover: async () => base.$(`[data-hook=${DataHooks.hoverComponent}]`).hover(),
});
