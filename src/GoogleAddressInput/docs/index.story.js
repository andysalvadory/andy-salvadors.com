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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';

import GoogleAddressInput from '..';
import clients from '../../clients';
import GoogleAPILoader from '../../../stories/utils/GoogleAPILoader';
import * as examples from './examples';

const example = config =>
  baseExample({ components: { ...allComponents, GoogleAPILoader }, ...config });

const code = config =>
  baseCode({ components: { ...allComponents, GoogleAPILoader }, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: GoogleAddressInput,
  componentPath: '..',

  componentWrapper: ({ component }) => (
    <GoogleAPILoader>{component}</GoogleAPILoader>
  ),

  componentProps: setProps => ({
    dataHook: storySettings.dataHook,
    Client: clients.GoogleMapsClient,
    value: '',
    onChange: ({ target }) => setProps({ value: target.value }),
    onSet: e => setProps({ value: e.originValue }),
    placeholder: 'Enter Address...',
  }),

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/GoogleAddressInput`,
      component: GoogleAddressInput,
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
            title: 'Sizes',
            text:
              'There are three sizes: `small`, `medium` (default) and `large`.',
            source: examples.sizes,
          }),

          example({
            title: 'Shapes',
            text: 'There are two shapes: `round` (default) and `square`.',
            source: examples.shapes,
          }),

          example({
            title: 'Clear Button',
            text: 'Clear Button',
            source: examples.clearButton,
          }),

          example({
            title: 'Controlled Google Address Input',
            source: examples.controlledGoogleAddressInput,
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
