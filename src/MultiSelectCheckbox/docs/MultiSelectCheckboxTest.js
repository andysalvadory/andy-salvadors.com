import React, { useState } from 'react';
import { storySettings } from './storySettings';
import options from './multiSelectOptions';
import MultiSelectCheckbox from '../MultiSelectCheckbox';
import { valueParser } from './ExampleStandard';

const MultiSelectCheckboxTest = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onSelect = option => setSelectedOptions([...selectedOptions, option]);
  const onDeselect = option =>
    setSelectedOptions(selectedOptions.filter(item => item !== option));

  return (
    <MultiSelectCheckbox
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
      onDeselect={onDeselect}
      valueParser={valueParser}
      dataHook={storySettings.dataHook}
    />
  );
};

export default MultiSelectCheckboxTest;
