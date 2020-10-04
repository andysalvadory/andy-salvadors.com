import React from 'react';
import PropTypes from 'prop-types';
import X from 'wix-ui-icons-common/X';
import Check from 'wix-ui-icons-common/Check';

import IconButton from '../IconButton';
import css from './ColorPickerActions.scss';
import { DataHooks } from './constants';

const ColorPickerActions = ({ onCancel, onConfirm, disabled }) => (
  <div className={css.root}>
    <IconButton
      dataHook={DataHooks.cancelButton}
      size="small"
      priority="secondary"
      onClick={onCancel}
    >
      <X />
    </IconButton>
    <IconButton
      dataHook={DataHooks.confirmButton}
      size="small"
      disabled={disabled}
      onClick={onConfirm}
    >
      <Check />
    </IconButton>
  </div>
);

ColorPickerActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ColorPickerActions;
