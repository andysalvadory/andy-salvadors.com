import React from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator';
import styles from './Input.scss';
import classNames from 'classnames';

class InputErrorSuffix extends React.Component {
  render() {
    const { tooltipPlacement, errorMessage } = this.props;
    return (
      <ErrorIndicator
        className={classNames(styles.errorExclamation, {
          [styles.narrow]: this.props.narrow,
        })}
        dataHook="input-tooltip"
        disabled={errorMessage.length === 0}
        placement={tooltipPlacement}
        errorMessage={errorMessage}
      />
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  narrow: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
};

export default InputErrorSuffix;
