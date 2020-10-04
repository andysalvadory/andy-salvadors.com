import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const modalUniDriverFactory = (base, body) => {
  const getPortal = () => body.$('.portal');
  const getOverlay = () => body.$('.ReactModal__Overlay');
  const getContent = () => body.$('.ReactModal__Content');
  const getCloseButton = () => body.$('[data-hook="modal-close-button"]');

  const isOpen = () => getContent().exists();

  return {
    ...baseUniDriverFactory(base),
    isOpen,
    isThemeExist: theme =>
      getPortal()
        .$(`.${theme}`)
        .exists(),
    getChildBySelector: async selector =>
      (await getPortal()
        .$(selector)
        .exists())
        ? getPortal().$(selector)
        : null,
    isScrollable: async () =>
      !(await getPortal().hasClass('portalNonScrollable')),
    closeButtonExists: () => getCloseButton().exists(),
    clickOnOverlay: () => getOverlay().click(),
    clickOnCloseButton: () => getCloseButton().click(),
    getContentStyle: async () => await getContent()._prop('style'),
    getContentLabel: () => getContent().attr('aria-label'),
    getZIndex: async () => {
      const style = await getOverlay()._prop('style');

      return style['z-index'];
    },
  };
};
