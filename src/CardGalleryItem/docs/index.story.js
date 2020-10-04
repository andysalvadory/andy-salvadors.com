/* eslint-disable no-console */
import React from 'react';
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
import Edit from 'wix-style-react/new-icons/Edit';
import Delete from 'wix-style-react/new-icons/Delete';
import Email from 'wix-style-react/new-icons/Email';
import More from 'wix-style-react/new-icons/More';
import Badge from 'wix-style-react/Badge';

import IconButton from 'wix-style-react/IconButton';

import CardGalleryItem from '..';
import { storySettings } from './storySettings';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import PopoverMenu from '../../beta/PopoverMenu';

const { category, storyName, dataHook } = storySettings;
const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

const getPrimaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Primary action clicked');
  },
});
const getSecondaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Secondary action clicked');
  },
});
const commonProps = {
  badge: (
    <Badge size="medium" skin="standard" type="solid" uppercase>
      sale
    </Badge>
  ),
  title: 'Card Title',
  subtitle: 'Card subtitle',
  backgroundImageUrl: backgroundImageUrl,
};

const code = config =>
  baseCode({
    components: { ...allComponents, PopoverMenu },
    compact: true,
    ...config,
  });

const example = ({ title, text, ...config }) =>
  columns([description({ title, text }), code(config)]);

export default {
  category,
  storyName,

  component: CardGalleryItem,
  componentPath: '..',

  componentProps: {
    ...commonProps,
    dataHook,
    primaryActionProps: getPrimaryActionProps('Button'),
    secondaryActionProps: getSecondaryActionProps('Text Link'),
    settingsMenu: (
      <PopoverMenu
        triggerElement={({ onClick }) => (
          <IconButton
            onClick={e => {
              onClick(e);
              e.stopPropogation();
            }}
            skin="light"
            priority="secondary"
          >
            <More />
          </IconButton>
        )}
      >
        <PopoverMenu.MenuItem text="Edit" prefixIcon={<Edit />} />
        <PopoverMenu.MenuItem text="Delete" prefixIcon={<Delete />} />
        <PopoverMenu.MenuItem text="Delete" prefixIcon={<Email />} />
        <PopoverMenu.MenuItem text="Something" disabled />
      </PopoverMenu>
    ),
  },

  // exampleProps,

  sections: [
    header(),
    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample(
            "import CardGalleryItem from 'wix-style-react/CardGalleryItem';",
          ),
          divider(),
          title('Examples'),
          ...[
            {
              title: 'SettingsMenu',
              text:
                'SettingsMenu can be constrocted with IconButton, TextButton or any other trigger based component.',
              source: examples.iconButton,
            },

            {
              title: 'Badge',
              text: 'Component can display a badge.',
              source: examples.badge,
            },
            {
              title: 'Background Image Node',
              text:
                'Component can display with background image node component instead background image URL.',
              source: examples.backgroundImageNode,
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
