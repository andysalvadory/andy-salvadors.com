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

import * as examples from './examples';

import FillPreview from '..';

const liveCode = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'FillPreview',

  component: FillPreview,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/FillPreview/',
      component: (
        <div
          style={{
            width: '92px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: 10,
          }}
        >
          <FillPreview fill="#28c197" />
          <FillPreview />
          <FillPreview mode="add" />
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
                'Clickable preview for colors, gradients, images and svg. Keeps square aspect ratio.',
            }),
          ]),

          importExample(
            "import FillPreview from 'wix-style-react/FillPreview';",
          ),

          divider(),

          title('Examples'),

          liveCode({
            title: 'Simple',
            subtitle:
              'Component supports hex colors, gradients, image urls and svg through `fill` prop.',
            source: examples.simple,
          }),

          liveCode({
            title: 'States',
            subtitle: 'Component supports selected state and disabled.',
            source: examples.states,
          }),

          liveCode({
            title: 'Add Mode',
            subtitle:
              'When component is in add mode it can be used as a trigger element for invoking additional actions.',
            source: examples.addIcon,
          }),

          liveCode({
            title: 'Full Interactive Preview',
            description: '`selected` prop is controlled by a parent component.',
            source: examples.fullInteractive,
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
