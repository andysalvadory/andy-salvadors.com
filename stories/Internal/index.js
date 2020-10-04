import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from 'wix-style-react/Badge';
import Markdown from 'wix-storybook-utils/Markdown';
import Internal from './INTERNAL.md';

import { Category } from '../storiesHierarchy';

storiesOf(Category.INTERNAL, module).add('What is this?', () => (
  <div>
    <Badge skin="danger">INTERNAL COMPONENTS</Badge>
    <Markdown source={Internal} />
  </div>
));
