import React from 'react';
import { storiesOf } from '@storybook/react';

import EmptyState from './EmptyState';
import ImagePlaceholder from '../../stories/utils/ImagePlaceholder';

const props = {
  title: "You don't have any items yet",
  subtitle:
    'Create your product item in an easy & fast way to display it on your site',
  image: <ImagePlaceholder />,
  theme: 'page',
};

const themes = ['page', 'page-no-border', 'section'];

themes.map(theme =>
  storiesOf(`EmptyState/Themes`, module).add(theme, () => (
    <EmptyState {...props} theme={theme} />
  )),
);

storiesOf(`EmptyState/Titles`, module).add('No Title', () => (
  <EmptyState {...props} title="" />
));

storiesOf(`EmptyState/Titles`, module).add('No Subtitle', () => (
  <EmptyState {...props} subtitle="" />
));
