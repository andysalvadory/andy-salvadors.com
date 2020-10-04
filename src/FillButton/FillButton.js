import React from 'react';
import PropTypes from 'prop-types';

import styles from './FillButton.st.css';
import Tooltip from '../Tooltip';
import Proportion from '../Proportion';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import IconAdd from '../new-icons/Add';
import IconAddSmall from '../new-icons/AddSmall';

import { dataHooks } from './constants';
import { parseColor, parseGradient, parseContrastColor } from './utils';

const { iconSmall, iconMedium } = dataHooks;

/** FillButton */
class FillButton extends React.PureComponent {
  static displayName = 'FillButton';

  static propTypes = {
    /** click handler */
    onClick: PropTypes.func,
    /** supports `small` and `medium` add icon size */
    iconSize: PropTypes.oneOf(['small', 'medium']),
    /** components disable state */
    disabled: PropTypes.bool,
    /** tooltip content value */
    tooltipContent: PropTypes.node,
    /** fill value in string. Hex or gradient */
    fill: PropTypes.string,
    /** tooltip common props */
    tooltipProps: PropTypes.object,
  };

  static defaultProps = {
    iconSize: 'small',
  };

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }
    return undefined;
  };

  _renderIcon = () => {
    const { iconSize, fill, disabled } = this.props;
    const AddIcon = iconSize === 'small' ? IconAddSmall : IconAdd;
    return (
      <AddIcon
        style={{ color: !disabled && parseContrastColor(fill) }}
        data-hook={iconSize === 'small' ? iconSmall : iconMedium}
      />
    );
  };

  render() {
    const {
      disabled,
      focusableOnBlur,
      focusableOnFocus,
      tooltipContent,
      dataHook,
      fill,
      iconSize,
      tooltipProps,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);
    return (
      <Tooltip
        appendTo="window"
        {...tooltipProps}
        upgrade
        disabled={disabled}
        dataHook={dataHook}
        content={tooltipContent}
        size="small"
      >
        <Proportion className={styles.proportion}>
          <button
            {...rest}
            {...styles('root', { disabled, fill: !!background }, this.props)}
            style={{ ...background }}
            data-hook={dataHooks.button}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
            disabled={disabled}
          >
            {this._renderIcon()}
          </button>
        </Proportion>
      </Tooltip>
    );
  }
}

export default withFocusable(FillButton);
