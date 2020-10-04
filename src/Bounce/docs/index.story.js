import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Bounce from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Bounce,
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
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Bounce.displayName}/`,
      component: <Bounce />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Controlled Animation',
            text: 'A simple example of usage of Bounce component',
            source: examples.bounceExample,
          }),

          example({
            title: 'onExited example',
            text: '`onExited` callback is executed when the transition ends.',
            source: examples.onExitedExample,
          }),

          example({
            title: 'loop example',
            text:
              'When `loop` prop is true, the child component bounces repetitively until stopped by other event.',
            source: examples.loopExample,
          }),

          example({
            title: 'delay example',
            text:
              'When `delay` prop is true, the child component bounces with a delay.',
            source: examples.delayExample,
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
