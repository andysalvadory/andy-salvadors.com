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
  code as baseLiveCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import icons from '../../../stories/utils/icons-for-story';

import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

import { storySettings } from '../test/storySettings';

import ListItemAction from '..';

const liveCode = config =>
  baseLiveCode({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), liveCode({ source })]);

export default {
  category: storySettings.category,
  storyName: 'listItemAction',

  component: ListItemAction,
  componentPath: '..',

  componentProps: {
    title: 'Hello World!',
  },

  exampleProps: {
    prefixIcon: icons,
  },

  sections: [
    header({
      title: 'ListItemAction',
      component: (
        <div style={{ width: '200px' }}>
          <ListItemAction as="button" title="Option 1" />
          <ListItemAction as="button" title="Option 2" />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'ListItemAction is internal component which is used to build dropdown or menu like components. Usually this item should not be used by consumers, though custom options builder is exposed for usage with DropdownBase.',
            }),
          ]),

          columns([
            importExample(
              "import {listItemActionBuilder} from 'wix-style-react/ListItemAction';",
            ),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Plain Example',
              text: 'Using options builder to render a list of items.',
              source: examples.simple,
            },
            {
              title: 'Affix',
              text: 'Supports prefix icons.',
              source: examples.prefix,
            },
            {
              title: 'Skin',
              text:
                'Supports three different skins: standard, dark & destructive',
              source: examples.skin,
            },
            {
              title: 'Size',
              text: 'Supports two sizes: small and medium',
              source: examples.size,
            },
            {
              title: 'States',
              text: 'Supports disabled state.',
              source: examples.state,
            },
            {
              title: 'Text Ellipsis',
              text: 'Text can be set to be ellipsed on tight container width.',
              source: examples.wrap,
            },
            {
              title: 'Custom render element',
              text: 'Supports rendering with custom html tag.',
              source: examples.as,
            },
          ].map(example),
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
