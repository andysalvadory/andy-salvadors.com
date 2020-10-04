import React from 'react';
import ListItemEditable from '../ListItemEditable';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const commonProps = {
  onApprove: () => null,
  onCancel: () => null,
};

const Story = props => <ListItemEditable {...commonProps} {...props} />;

const options = {
  props: ['placeholder', 'size', 'status', 'margins'],
};

storyOfAllPermutations(Story, ListItemEditable, options);
