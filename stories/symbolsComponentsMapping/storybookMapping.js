import { linkTo } from '@storybook/addon-links';

import {
  inputsComponentsNames,
  layoutComponentsNames,
  buttonsComponentsNames,
  notificationsComponentsNames,
  tooltipPopoverComponentsNames,
  modalsComponentsNames,
  sharedComponentsNames,
} from './components';

import {
  foundationSymbols,
  inputsSymbols,
  symbolsGroup,
  buttonsSymbols,
  navigationSymbols,
  tooltipPopoverSymbols,
  modalsSymbols,
  notificationsSymbols,
} from './symbols';

const Category = {
  COMPONENTS: 'Components',
  BETA: 'BETA',
  WIP: 'WIP',
};

export const getComponentUrl = ({ componentName }) =>
  componentActualUrl[componentName] ||
  linkTo(Category.COMPONENTS, componentName);

export const getSymbolUrl = ({ groupSymbol, symbol }) =>
  symbolActualUrl[symbol] || linkTo(groupSymbol, symbol);

const componentActualUrl = {
  [sharedComponentsNames.Icon]: linkTo(symbolsGroup.foundation, '1.4 Icons'),

  [inputsComponentsNames.TimeInput]: linkTo(Category.COMPONENTS, 'TimePicker'),
  [inputsComponentsNames.DateInput]: linkTo(Category.WIP, 'DateInput'),
  [inputsComponentsNames.MultiSelect]: linkTo(
    Category.COMPONENTS,
    'Multiselect',
  ),

  [layoutComponentsNames.PageHeader]: linkTo(Category.COMPONENTS, 'PageHeader'),
  [layoutComponentsNames.Layout]: linkTo(
    `${Category.COMPONENTS}/Layout`,
    'Usage',
  ),
  [layoutComponentsNames.CardHeader]: linkTo(Category.COMPONENTS, 'Card'),
  [layoutComponentsNames.CardContent]: linkTo(Category.COMPONENTS, 'Card'),
  [layoutComponentsNames.CardDivider]: linkTo(Category.COMPONENTS, 'Card'),

  [tooltipPopoverComponentsNames.PopoverMenu]: linkTo(
    Category.BETA,
    'PopoverMenu',
  ),

  [modalsComponentsNames.MessageBoxMarketerialLayout]: linkTo(
    symbolsGroup.modals,
    '9.4 Announcement',
  ),
};

const symbolActualUrl = {
  [foundationSymbols.icons]: linkTo(symbolsGroup.foundation, '1.4 Icons'),

  [inputsSymbols.tagsInput]: linkTo(symbolsGroup.inputs, '3.12 Tags'),

  [navigationSymbols.sidebarMenu]: linkTo(
    symbolsGroup.navigation,
    '6.1 Sidebar',
  ),

  [tooltipPopoverSymbols.popoverMenu]: linkTo(
    symbolsGroup.tooltipPopovers,
    '7.3 PopoverMenu',
  ),

  [modalsSymbols.content]: linkTo(symbolsGroup.modals, '9.3 Custom Modal'),
  [modalsSymbols.marketing]: linkTo(symbolsGroup.modals, '9.4 Announcement'),
};
