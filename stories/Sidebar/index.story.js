import React from 'react';
import {
  header,
  description,
  title,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';

import { storySettings } from './storySettings';
import * as examples from './examples';
import { baseScope } from '../utils/LiveCodeExample';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Sidebar/',
    }),
    columns([
      description({
        title: 'Description',
        text: `Compositions from multiple components that help to setup a sidebar menu.`,
      }),
    ]),
    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo kind="Components" story="Sidebar">{`<Sidebar/>`}</LinkTo>,
            'A sidebar menu container for displaying persistent elements and drilling in',
          ],
          [
            <LinkTo
              kind="Components"
              story="SidebarHeader"
            >{`<SidebarHeader/>`}</LinkTo>,
            'A header within the sidebar with title, subtitle and custom content at the bottom',
          ],
          [
            <LinkTo
              kind="Components"
              story="SidebarDivider"
            >{`<SidebarDivider/>`}</LinkTo>,
            'A divider within the sidebar that supports inner and full mode',
          ],
          [
            <LinkTo
              kind="Components"
              story="SidebarSectionTitle"
            >{`<SidebarSectionTitle/>`}</LinkTo>,
            'A title for the section within the sidebar',
          ],
          [
            <LinkTo
              kind="Components"
              story="SidebarSectionItem"
            >{`<SidebarSectionItem/>`}</LinkTo>,
            'An item for the section within the sidebar',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    ...[
      {
        title: 'Business Manager Sidebar',
        description: `This example uses the multiple sidebar components to composite a sidebar that's suitable for the Business Manager. Notice that the back button and the footer aren't part of these components, and have specific implementation.`,
        source: examples.businessManagerSidebar,
      },
    ].map(code),
  ],
};
