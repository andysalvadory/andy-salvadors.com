import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';
import Search from '..';

const kind = getTestStoryKind(storySettings);

const options = [
  'The quick',
  'brown',
  'fox',
  'jumps over',
  'the lazy',
  'dog',
  'Option1',
  'Option2',
  'Option3',
  'Option4',
  'Option5',
  'last Option',
].map((value, id) => ({ id, value }));

const StatefulSearch = () => {
  const [value, setValue] = useState('');
  return (
    <Search
      dataHook={storySettings.dataHook}
      options={options}
      showOptionsIfEmptyInput={false}
      closeOnSelect={false}
      value={value}
      onChange={e => setValue(e.target.value)}
      onSelect={option => setValue(option.value)}
    />
  );
};

storiesOf(kind, module).add(testStories.search, () => <StatefulSearch />);
