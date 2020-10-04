import { contentWidgetsSymbols } from '../symbols';
import {
  contentWidgetsComponentsNames,
  sharedComponentsNames,
} from '../components';

export const contentWidgetsSymbolsToComponents = {
  [contentWidgetsSymbols.imageWidget]: [],

  [contentWidgetsSymbols.emptyState]: [sharedComponentsNames.EmptyState],

  [contentWidgetsSymbols.statisticsWidget]: [
    contentWidgetsComponentsNames.StatisticsWidget,
  ],

  [contentWidgetsSymbols.carousel]: [contentWidgetsComponentsNames.Carousel],

  [contentWidgetsSymbols.accordion]: [contentWidgetsComponentsNames.Accordion],

  [contentWidgetsSymbols.cardGalleryItem]: [
    contentWidgetsComponentsNames.CardGalleryItem,
  ],

  [contentWidgetsSymbols.preview]: [],

  [contentWidgetsSymbols.omniSetup]: [],
};
