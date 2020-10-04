import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import TextButton from '../../TextButton';
import { dataHooks } from '../constants';
import styles from '../Notification.st.css';

const ActionButton = ({ children, onClick, type, link, target }) => {
  const commonProps = {
    dataHook: dataHooks.notificationCtaButton,
    onClick,
  };

  if (type === 'textLink') {
    return (
      <TextButton
        className={styles.textLink}
        underline="always"
        skin="light"
        as="a"
        href={link}
        target={target}
        {...commonProps}
      >
        {children}
      </TextButton>
    );
  } else {
    return (
      <Button
        className={styles.button}
        type="button"
        size="small"
        skin="transparent"
        {...commonProps}
      >
        {children}
      </Button>
    );
  }
};

ActionButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  link: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
};

ActionButton.defaultProps = {
  type: 'button',
  target: '_self',
};

ActionButton.displayName = 'Notification.ActionButton';

export default ActionButton;
