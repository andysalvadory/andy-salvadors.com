import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import DataHooks from './CardGalletyItemDataHooks';

const getTitle = base => base.$(`[data-hook=${DataHooks.title}]`);
const getBadge = base => base.$(`[data-hook=${DataHooks.badge}]`);
const getSettingsMenu = base => base.$(`[data-hook=${DataHooks.settingsMenu}]`);
const getSubtitle = base => base.$(`[data-hook=${DataHooks.subtitle}]`);
const getPrimaryAction = async base => {
  await getHoverComponent(base).hover();
  return base.$(`[data-hook=${DataHooks.primaryAction}]`);
};
const getSecondaryAction = async base => {
  await getHoverComponent(base).hover();
  return base.$(`[data-hook=${DataHooks.secondaryAction}]`);
};
const getHoverComponent = base =>
  base.$(`[data-hook=${DataHooks.hoverComponent}]`);
const getBackgroundImageNode = base =>
  base.$(`[data-hook=${DataHooks.backgroundImageNode}]`);
const cardGalleryItemDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    getTitle: async () =>
      (await getTitle(base).exists()) ? getTitle(base).text() : null,
    getBadge: async () =>
      (await getBadge(base).exists())
        ? getBadge(base)._prop('firstChild')
        : null,
    getSubtitle: async () =>
      (await getSubtitle(base).exists()) ? getSubtitle(base).text() : null,
    getBackgroundImageUrl: async () => {
      const style = await base
        .$(`[data-hook=${DataHooks.backgroundImage}]`)
        .attr('style');

      return style.match(/url\("?([^"]*)"?\)/)[1];
    },
    click: async () => {
      await (await getPrimaryAction(base)).click();
    },
    getPrimaryActionLabel: async () => (await getPrimaryAction(base)).text(),
    clickOnPrimaryAction: async () => (await getPrimaryAction(base)).click(),
    getSecondaryActionLabel: async () =>
      (await getSecondaryAction(base)).text(),
    clickOnSecondaryAction: async () =>
      (await getSecondaryAction(base)).click(),
    getSettingsMenu: async () => {
      await getHoverComponent(base).hover();
      return (await getSettingsMenu(base).exists())
        ? getSettingsMenu(base)._prop('firstChild')
        : null;
    },
    getBackgroundImageNode: async () =>
      (await getBackgroundImageNode(base).exists())
        ? getBackgroundImageNode(base)._prop('firstChild')
        : null,
  };
};

export default cardGalleryItemDriverFactory;
