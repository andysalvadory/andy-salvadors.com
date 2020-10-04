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
import {
  themedExample,
  customExample,
  technology1,
  technology2,
} from './example';

import Theme from '..';
import GallerySidepanel from '../GallerySidepanel';
import calc_theme from '../calc_theme';

const code = config =>
  baseCode({
    components: { ...allComponents, GallerySidepanel, calc_theme },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: 'Theme',

  component: Theme,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Theme/',
      component: <Theme buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          columns([
            importExample("import Theme from 'wix-style-react/Theme';"),
          ]),

          divider(),

          title('Theme'),

          code({
            compact: true,
            source: themedExample,
          }),

          title('Theme Customization'),

          code({
            compact: true,
            source: customExample,
          }),

          title('Technology'),
          description(
            'CSS variables - useful for reducing repetition in CSS and also for powerful runtime effects like theme switching.',
          ),

          code({
            compact: true,
            source: technology1,
          }),

          code({
            compact: true,
            source: technology2,
          }),
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
