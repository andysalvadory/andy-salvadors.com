import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';
import styles from './Ticker.scss';
import InputConsumer from '../InputConsumer';
import { dataHooks } from './constants';

const Ticker = ({ onUp, onDown, upDisabled, downDisabled, dataHook }) => (
  <InputConsumer consumerCompName={Ticker.displayName}>
    {({ disabled, readOnly }) => {
      const isUpDisabled = upDisabled || disabled || readOnly;
      const isDownDisabled = downDisabled || disabled || readOnly;
      return (
        <div className={styles.root} data-hook={dataHook}>
          <div
            data-hook={dataHooks.tickerUp}
            data-disabled={isUpDisabled}
            className={classnames(styles.up, {
              [styles.disabled]: isUpDisabled,
            })}
            onClick={isUpDisabled ? null : onUp}
          >
            <FormFieldSpinnerUp />
          </div>
          <div
            data-hook={dataHooks.tickerDown}
            data-disabled={isDownDisabled}
            className={classnames(styles.down, {
              [styles.disabled]: isDownDisabled,
            })}
            onClick={isDownDisabled ? null : onDown}
          >
            <FormFieldSpinnerDown />
          </div>
        </div>
      );
    }}
  </InputConsumer>
);

Ticker.displayName = 'Input.Ticker';

Ticker.propTypes = {
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  upDisabled: PropTypes.bool,
  downDisabled: PropTypes.bool,
  dataHook: PropTypes.string,
};

export default Ticker;
