/* eslint-disable no-console */
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
  api,
} from 'wix-storybook-utils/Sections';
import { Layout, Cell } from 'wix-style-react/Layout';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import MaynSteps from '!raw-loader!./examples/ManySteps';
import FourSteps from '!raw-loader!./examples/FourSteps';
import StepTypes from '!raw-loader!./examples/StepTypes';
import Stepper from '..';

import testkitDesc from './testkit.md';

const code = config =>
  baseCode({
    components: {
      Stepper,
      steps7: steps7,
      steps4: steps4,
      onClick,
      ...allComponents,
    },
    autoRender: false,
    ...config,
  });

const steps7 = [
  { text: 'This is a long step name', type: 'completed' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'error' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'error' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'disabled' },
];

const steps4 = [
  { text: 'First step', type: 'completed' },
  { text: 'Second step' },
  { text: 'Third step', type: 'error' },
  { text: 'Forth step' },
];

const onClick = id => console.log(`step ${id} was clicked`);

export default {
  category: storySettings.category,
  storyName: 'Stepper',

  component: Stepper,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
    dataHook: storySettings.dataHook,
    steps: steps7,
    activeStep: 2,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Stepper/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Stepper displays the path a user needs to follow to complete the process. It breaks a large number of information into steps and indicates which step is active. It works best when split up to 7 steps.',
            }),
          ]),

          columns([
            importExample("import Stepper from 'wix-style-react/Stepper';"),
          ]),

          divider(),

          title('Examples'),

          code({
            title: 'Steps types',
            description: `Steps can get different types: normal, completed, error and disabled.`,
            compact: true,
            source: StepTypes,
          }),

          code({
            title: 'Inside card',
            description: `In cases where there is not enough space, the active step's text is fully displayed and the rest of the steps texts are equally shortened.`,
            compact: true,
            source: MaynSteps,
          }),

          code({
            title: 'Inside card',
            description:
              'Demonstrating a case where there is enough space for all steps text',
            compact: true,
            source: FourSteps,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [description(testkitDesc)] },
      ].map(tab),
    ]),
  ],
};
