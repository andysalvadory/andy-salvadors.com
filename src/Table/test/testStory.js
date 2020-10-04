/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { ActionCellExample } from './testExamples';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from '../docs/storySettings';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.ACTION_CELL, () => (
  <ActionCellExample />
));
