import { navigationSymbols } from '../symbols';
import { navigationComponentsNames as componentsNames } from '../components';

export const navigationSymbolsToComponents = {
  [navigationSymbols.sidebarMenu]: [
    componentsNames.Sidebar,
    componentsNames.SidebarHeader,
    componentsNames.SidebarDivider,
    componentsNames.SidebarSectionItem,
    componentsNames.SidebarSectionTitle,
  ],

  [navigationSymbols.treeNavigation]: [],

  [navigationSymbols.textTabs]: [componentsNames.Tabs],

  [navigationSymbols.verticalTabs]: [],

  [navigationSymbols.topBar]: [],

  [navigationSymbols.stepper]: [componentsNames.Stepper],
};
