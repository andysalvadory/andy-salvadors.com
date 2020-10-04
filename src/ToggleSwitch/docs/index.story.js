import React from 'react';
import ToggleSwitch from '..';
import {
  SIZES,
  SKINS,
} from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/constants';

import { storySettings } from './storySettings';

import {
  api,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import * as examples from './examples';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import ExampleFormField from '!raw-loader!./ExampleFormField';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ToggleSwitch,
  componentPath: '..',

  componentProps: (setState, getState) => ({
    checked: false,
    onChange: () => setState({ checked: !getState().checked }),
  }),

  exampleProps: {
    size: Object.keys(SIZES),
    skin: Object.keys(SKINS),

    onChange: () => 'changed',
  },

  sections: [
    header({
      component: <ToggleSwitch onChange={() => 'changed'} size="small" />,

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/ToggleSwitch',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`Provides a spinner to be used for async operations.`),

          importExample(
            "import ToggleSwitch from 'wix-style-react/ToggleSwitch';",
          ),

          divider(),

          title('Examples'),

          ...[{ title: 'Size', source: examples.size }].map(
            ({ title, source }) =>
              columns([description({ title }), code({ source })]),
          ),

          ...[{ title: 'Skin', source: examples.skin }].map(
            ({ title, source }) =>
              columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Controlled with tooltip', source: ExampleFormField },
          ].map(({ title, source }) =>
            columns([
              description({ title }),
              code({ source, autoRender: false }),
            ]),
          ),
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
