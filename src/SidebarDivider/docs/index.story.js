import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SidebarDivider from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidebarDivider',

  component: SidebarDivider,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidebarDivider/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'A divider within the sidebar that supports inner and full mode.',
            }),
          ]),

          columns([
            importExample(
              "import SidebarDivider from 'wix-style-react/SidebarDivider';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Plain Example',
              text: 'A simple example for an inner sidebar divider',
            }),

            code({
              compact: true,
              source: `<SidebarDivider />`,
            }),
          ]),

          columns([
            description({
              title: 'Full-Width Divider',
              text:
                'An example that demonstrates a divider with full width. Notice that in this mode, the divider has no margins',
            }),

            code({
              compact: true,
              source: `<SidebarDivider fullWidth />`,
            }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
