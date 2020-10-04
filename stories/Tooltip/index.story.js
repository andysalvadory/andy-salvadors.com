import React from 'react';
import { storySettings } from './storySettings';
import allComponents from '../utils/allComponents';
import {
  header,
  title,
  description,
  table,
  importExample,
  columns,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { Layout, Cell } from 'wix-style-react/Layout';
import TextButton from 'wix-style-react/TextButton';
import Tooltip from 'wix-style-react/Tooltip';
import SectionHelper from 'wix-style-react/SectionHelper';
import { Category } from '../storiesHierarchy';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Layout gap={10}>
          <Cell>
            <Tooltip upgrade appendTo="window" content="HERE I AM! THIS IS ME!">
              <TextButton skin="dark">Hover me</TextButton>
            </Tooltip>
          </Cell>
          <Cell span={6}>
            <SectionHelper title="Next Generation Tooltip">
              To enable new generation read more on Tooltip's API docs
            </SectionHelper>
          </Cell>
        </Layout>
      ),
    }),

    columns([
      description({
        title: 'Description',
        text: `Tooltips can be attached to any active element (icons, text links, buttons, etc.) on a page. They provide descriptions or explanations for their paired element. Thus, tooltips are highly contextual and specific and don’t explain the bigger picture or entire task flow.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Tooltip"
            >{`<Tooltip/>`}</LinkTo>,
            'content element',
          ],
          [
            <LinkTo
              kind={Category.BUTTONS}
              story="5.3 TextButton"
            >{`<TextButton/>`}</LinkTo>,
            'trigger element',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Text"
            >{`<Text/>`}</LinkTo>,
            'trigger element',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    example({
      title: 'Plain Example',
      text: 'Plain example of how to use tooltip.',
      source: examples.basic,
    }),

    example({
      title: 'Placement',
      text:
        'Tooltips have four standard placements available: `top`, `right`, `bottom`, and `left`. Each standard position center-aligns itself along the appropriate axis and appears outside the target element.',
      source: examples.placements,
    }),

    example({
      title: 'Delay',
      text:
        'Time in milliseconds to wait before showing or hiding the tooltip. Controlled by props `enterDelay` or `exitDelay`.',
      source: examples.delay,
    }),

    example({
      title: 'Size',
      text: 'Tooltip supports two sizes: `small` and `medium`.',
      source: examples.size,
    }),

    example({
      title: 'Disabled Elements',
      text:
        'By default disabled elements like `<button>` do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element like a `span`.',
      source: examples.disabled,
    }),
  ],
};
