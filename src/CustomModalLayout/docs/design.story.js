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
  table,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/designStorySettings';
import allComponents from '../../../stories/utils/allComponents';

import BasicExample from '!raw-loader!./examples/BasicExample';
import FootnoteExample from '!raw-loader!./examples/FootnoteExample';
import ModalExample from '!raw-loader!./examples/ModalExample';
import PageExample from '!raw-loader!./examples/PageExample';
import TableExmaple from '!raw-loader!./examples/TableExample';
import MarketingExample from '!raw-loader!./examples/MarketingExample';
import CustomModalLayout from '..';
import Checkbox from '../../Checkbox';
import { Category } from '../../../stories/storiesHierarchy';
import LinkTo from '@storybook/addon-links/react';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  componentProps: {
    title: 'Modal title',
    children: 'Lorem ipsum',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    sideActions: <Checkbox>Check</Checkbox>,
    footnote: 'footnote text',
    onCloseButtonClick: () => {},
  },
  component: CustomModalLayout,
  componentPath: '..',

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new/choose',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/CustomModalLayout/',
    }),
    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="CustomModalLayout"
            >{`<CustomModalLayout/>`}</LinkTo>,
            'A custom modal component',
          ],
        ],
      }),
    ]),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: [
                'Use this component together with ',
                <LinkTo
                  kind={Category.COMPONENTS}
                  story="Modal"
                >{`<Modal />`}</LinkTo>,
                ' to display content in this layout. You may place a title and/or a footer with actions relevant to the displayed content.',
              ],
            }),
          ]),

          columns([
            importExample(
              "import { CustomModalLayout } from 'wix-style-react';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Basic Usage',
              text: 'A Basic example with compact preview',
            }),

            code({
              compact: true,
              source: BasicExample,
            }),
          ]),
          columns([
            description({
              title: 'Footnote Example',
              text:
                'Same as the basic example, with the addition of a footnote',
            }),

            code({
              compact: true,
              source: FootnoteExample,
            }),
          ]),

          columns([
            description({
              title: 'Opening in a modal',
              text:
                'Opening the CustomModalLayout is done with the Modal component, usually in the regular size of full-screen',
            }),

            code({
              compact: true,
              source: ModalExample,
            }),
          ]),
          columns([
            description({
              title: 'Table example - No content padding',
              text:
                'A simple example with a table as the content and without content padding',
            }),

            code({
              compact: true,
              source: TableExmaple,
            }),
          ]),
          columns([
            description({
              title: 'Marketing Layout example',
              text: 'A custom modal example with a marketing layout',
            }),

            code({
              compact: true,
              source: MarketingExample,
            }),
          ]),
          columns([
            description({
              title: 'Custom Page Example',
              text: 'Open a custom page in a modal',
            }),

            code({
              compact: true,
              source: PageExample,
            }),
          ]),
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
