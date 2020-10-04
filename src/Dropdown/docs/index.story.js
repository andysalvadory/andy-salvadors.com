import React from 'react';
import {
  header,
  description,
  columns,
  importExample,
  title,
  code,
  tab,
  api,
  testkit,
  playground,
  tabs,
  divider,
} from 'wix-storybook-utils/Sections';
import Dropdown from '..';
import { Layout, Cell } from '../../Layout';
import { storySettings } from './storySettings';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

const liveCode = config =>
  code({
    components: baseScope,
    ...config,
  });

const example = props => liveCode(props);

const options = [
  { id: 0, value: 'Option 1' },
  { id: 1, value: 'Option 2' },
  { id: 2, value: 'Option 3' },
  { id: 3, value: 'Option 4' },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Dropdown,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    placeholder: 'This is a placeholder',
    options,
  },
  exampleProps: {
    options: [{ label: 'simple', value: options }],
  },

  sections: [
    header({
      component: (
        <Layout gap={10}>
          <Cell span={3}>
            <Dropdown
              placeholder="Select dominant hand"
              popoverProps={{ appendTo: 'window' }}
              options={[
                { id: 0, value: 'Left' },
                { id: 1, value: 'Right' },
                { id: 2, value: 'Ambidextrous' },
              ]}
            />
          </Cell>
        </Layout>
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
                'A Dropdown presents a list of options and allows a user to select one of the options.',
            }),
          ]),

          importExample(),

          divider(),

          title('Usage Examples'),

          ...[
            {
              title: 'Simple',
              text: 'Simple example of usage.',
              source: examples.simple,
            },
            {
              title: 'Grouping',
              text: 'Any options list can be grouped to defined categories.',
              source: examples.group,
            },
            {
              title: 'Divider',
              text: 'An example where divider is used to split the options.',
              source: examples.divider,
            },
            {
              title: 'Sizes',
              text: 'Dropdown supporst three sizes: small, medium and large.',
              source: examples.sizes,
            },
            {
              title: 'Input Prefix',
              text: 'An example where input can contain prefix value.',
              source: examples.prefix,
            },
            {
              title: 'Input Suffix',
              text: 'An example where input can contain suffix value.',
              source: examples.suffix,
            },
            {
              title: 'Footer',
              text:
                'An example where fixed footer is always attached to the bottom of options.',
              source: examples.footer,
            },
            {
              title: 'Dropdown states',
              subtitle: 'Two available states: disabled and error.',
              source: examples.states,
            },
            {
              title: 'Dynamic width',
              subtitle:
                'For options that are too long - dropdown component can be detached from parent container width to document body by passing popover prop `appendTo="window"`. Just make sure to control the growth of the dropdown with maxWidth prop.',
              source: examples.dynamicWidth,
            },
            {
              title: 'Native support',
              subtitle:
                'For mobile usage the component can switch to native dropdown.',
              source: examples.native,
            },
            {
              title: 'Infinite scroll',
              subtitle:
                'An example where loading more options with infinite scroll is presented.',
              source: examples.infinite,
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
