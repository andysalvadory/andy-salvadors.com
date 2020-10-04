import React from 'react';

import {
  tab,
  importExample,
  title,
  description,
  code,
  api,
  playground,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';

import Notification from '..';
import Text from 'wix-style-react/Text';

import * as examples from './examples.js';
import CompoundComponentsRaw from '!raw-loader!./README.md';

const exampleChildren = [
  {
    label: 'Just text',
    value: <Notification.TextLabel>Notification text</Notification.TextLabel>,
  },

  {
    label: 'Text and action button',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.ActionButton>Button</Notification.ActionButton>,
    ],
  },

  {
    label: 'Text and close button',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.CloseButton />,
    ],
  },

  {
    label: 'Text and both buttons',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.ActionButton>Button</Notification.ActionButton>,
      <Notification.CloseButton />,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Notification,
  componentPath: '..',

  componentProps: {
    theme: 'standard',
    type: 'global',
    show: true,
    children: exampleChildren[0].value,
  },

  componentWrapper: ({ component }) => (
    <div>
      {component}
      <Text>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.repeat(
          5,
        )}
      </Text>
    </div>
  ),

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    tab({
      title: 'Description',
      sections: [
        description({
          title: 'Description',
          text:
            'A sticky toast bar that appears on top of the screen notifying about system changes.',
        }),

        importExample("import { Notification } from 'wix-style-react';"),

        title('Examples'),

        code({
          title: 'Themes',
          compact: true,
          source: examples.themes,
          components: { Notification },
        }),

        code({
          title: 'Actions',
          compact: true,
          source: examples.actions,
          components: { Notification },
        }),

        code({
          title: 'Label Text Ellipsis',
          compact: true,
          source: examples.ellipsis,
          components: { Notification },
        }),
      ],
    }),

    ...[
      { title: 'API', sections: [api()] },
      {
        title: 'Compound Components API',

        sections: [
          description({
            title: 'Compound Components APIs',
            text: CompoundComponentsRaw,
          }),
        ],
      },
      { title: 'Testkit', sections: [testkit()] },
      { title: 'Playground', sections: [playground()] },
    ].map(tab),
  ],
};
