import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import CheckboxIndeterminate from 'wix-ui-icons-common/system/CheckboxIndeterminate';
import Label from '../Label';
import styles from './Checkbox.scss';
import textStyles from '../Text/Text.st.css';
import { withFocusable, focusableStates } from '../common/Focusable';

import { generateID } from '../utils/generateId';
import Tooltip from '../Tooltip';
import * as DATA_ATTR from './DataAttr';
import { dataHooks } from './constants';

/** a simple WixStyle checkbox */
class Checkbox extends React.PureComponent {
  state = { isFocused: false };

  //TODO fix me please. We need to get away from ids.
  _id = `${Checkbox.displayName}-${generateID()}`;

  _getDataAttributes = () => {
    const { checked, indeterminate, disabled, hasError } = this.props;
    return {
      [DATA_ATTR.DATA_CHECK_TYPE]: indeterminate
        ? DATA_ATTR.CHECK_TYPES.INDETERMINATE
        : checked
        ? DATA_ATTR.CHECK_TYPES.CHECKED
        : DATA_ATTR.CHECK_TYPES.UNCHECKED,
      [DATA_ATTR.DATA_HAS_ERROR]: hasError && !disabled,
      [DATA_ATTR.DATA_DISABLED]: disabled,
    };
  };

  render() {
    const {
      id = this._id,
      checked,
      indeterminate,
      disabled,
      hasError,
      errorMessage,
      selectionArea,
      vAlign,
      hover,
      size,
      onChange,
      children,
      className,
      dataHook,
    } = this.props;

    const classname = classNames(
      styles.root,
      className,
      indeterminate
        ? styles.indeterminate
        : checked
        ? styles.checked
        : styles.unchecked,
      {
        [styles.hover]: hover,
        [styles.disabled]: disabled,
        [styles.hasError]: hasError && !disabled,
        [styles.selectionAreaAlways]: selectionArea === 'always',
        [styles.selectionAreaHover]: selectionArea === 'hover',
      },
    );

    /*
    NOTE: attaching Focusable handlers to root div (when the tabindex was on the main div under the label) is not working. The onFocus does not get
    called when clicking on the text (the children). So I moved the tabindex to the root.
    */
    return (
      <div
        data-hook={dataHook}
        className={classname}
        onFocus={this.props.focusableOnFocus}
        onBlur={this.props.focusableOnBlur}
        {...focusableStates(this.props)}
        tabIndex={disabled ? null : 0}
        {...this._getDataAttributes()}
      >
        <input
          data-hook={dataHooks.input}
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={disabled ? null : onChange}
          style={{ display: 'none' }}
        />

        <Label
          for={id}
          dataHook={dataHooks.label}
          className={classNames({
            [styles.vtop]: vAlign === 'top',
          })}
          size={size}
        >
          <Tooltip
            upgrade
            dataHook={dataHooks.box}
            disabled={disabled || !hasError || !errorMessage}
            placement={'top'}
            textAlign="center"
            content={errorMessage || ' '}
            maxWidth={230}
            hideDelay={150}
            zIndex={10000}
          >
            <div className={styles.outer}>
              <div className={classNames(styles.checkbox, styles[size])}>
                <div
                  className={styles.inner}
                  onClick={e => e.stopPropagation()}
                >
                  {indeterminate ? (
                    <CheckboxIndeterminate />
                  ) : (
                    <CheckboxChecked />
                  )}
                </div>
              </div>
            </div>
          </Tooltip>
          {children && (
            <div
              {...textStyles(
                'root',
                {
                  size,
                  skin: disabled ? 'disabled' : 'standard',
                  weight: 'thin',
                },
                { className: styles.children },
              )}
              data-hook={dataHooks.children}
              onClick={e => e.stopPropagation()}
            >
              {children}
            </div>
          )}
        </Label>
      </div>
    );
  }
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** used for automatic testing */
  checked: PropTypes.bool,

  children: PropTypes.node,

  /** Is checkbox disabled */
  disabled: PropTypes.bool,

  /** Does checkbox has an error */
  hasError: PropTypes.bool,

  id: PropTypes.string,

  /** Checkbox is in an indeterminate state */
  indeterminate: PropTypes.bool,

  /** The error message when there's an error */
  errorMessage: PropTypes.string,

  /** Selection area emphasises the clickable area, none means no emphasis, hover is when the mouse is on the component, and always will show constantly */
  selectionArea: PropTypes.oneOf(['none', 'hover', 'always']),

  /** Positioning of the checkbox compared to the label */
  vAlign: PropTypes.oneOf(['center', 'top']),

  /** used for automatic testing */
  hover: PropTypes.bool,

  /** Size of the checkbox label */
  size: PropTypes.oneOf(['small', 'medium']),

  /** A callback function triggered when the checkbox state is changed */
  onChange: PropTypes.func,

  /** Define styles through a classname */
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  size: 'medium',
  selectionArea: 'none',
  vAlign: 'center',
  onChange: e => e.stopPropagation(),
  hasError: false,
  disabled: false,
  indeterminate: false,
};

export default withFocusable(Checkbox);
