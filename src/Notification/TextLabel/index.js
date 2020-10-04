import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import { dataHooks } from '../constants';

const TextLabel = ({ children }) => (
  <Text ellipsis light dataHook={dataHooks.notificationLabel}>
    {children}
  </Text>
);

TextLabel.propTypes = {
  children: PropTypes.node,
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
