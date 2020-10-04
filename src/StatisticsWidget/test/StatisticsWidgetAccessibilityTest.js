import React from 'react';
import { storiesOf } from '@storybook/react';

import StatisticsWidget from '../StatisticsWidget';
import { TESTS_PREFIX } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';

const statistics = [
  {
    value: '$500',
    description: 'Monday',
    percentage: 21,
    onClick: () => {},
  },
  {
    value: '$1,500',
    description: 'Tuesday',
    percentage: 21,
    invertedPercentage: true,
  },
  {
    value: '$2,500',
    percentage: -11,
  },
  {
    value: '$3,500',
    description: 'Thursday',
    percentage: -11,
    invertedPercentage: true,
    descriptionInfo: 'Sales on Thursday',
    onClick: () => {},
  },
  {
    value: '0',
    description: 'Friday',
    percentage: 0,
    invertedPercentage: true,
    descriptionInfo: 'Sales on Friday',
    onClick: () => {},
  },
];

const kind = `${TESTS_PREFIX}/${storySettings.category}/${storySettings.storyName}`;

storiesOf(kind, module).add(storySettings.testStoryNames.ACCESSIBILITY, () => (
  <div style={{ marginLeft: 100, marginTop: 100 }}>
    <StatisticsWidget
      statistics={statistics}
      dataHook={storySettings.dataHook}
    />
  </div>
));
