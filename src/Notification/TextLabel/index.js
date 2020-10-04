import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import { dataHooks } from '../constants';
import styles from '../Notification.st.css';

const TextLabel = ({ children, ellipsis }) => (
  <Text
    className={styles.label}
    ellipsis={ellipsis}
    light
    dataHook={dataHooks.notificationLabel}
  >
    {children}
  </Text>
);

TextLabel.propTypes = {
  ellipsis: PropTypes.bool,
  children: PropTypes.node,
};

TextLabel.defaultProps = {
  ellipsis: true,
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
