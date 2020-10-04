import React from 'react';
import PropTypes from 'prop-types';
import FormFieldErrorFilled from 'wix-ui-icons-common/system/FormFieldWarningFilled';

import classNames from 'classnames';
import Tooltip from '../Tooltip';
import styles from './Input.scss';

class InputWarningSuffix extends React.Component {
  render() {
    const classes = classNames(styles.warningExclamation, {
      [styles.narrow]: this.props.narrow,
    });
    return (
      <Tooltip
        upgrade
        dataHook="input-tooltip"
        disabled={!this.props.warningMessage}
        placement={this.props.tooltipPlacement}
        alignment="center"
        textAlign="start"
        content={this.props.warningMessage || ''}
        overlay=""
        maxWidth={230}
        hideDelay={150}
        zIndex={10000}
      >
        <div className={classes}>
          <FormFieldErrorFilled />
        </div>
      </Tooltip>
    );
  }
}

InputWarningSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  warningMessage: PropTypes.node.isRequired,
  focused: PropTypes.bool,
  narrow: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
};

export default InputWarningSuffix;
