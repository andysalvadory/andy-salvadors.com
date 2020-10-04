import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { bool, func, node, oneOfType, string, number } from 'prop-types';
import Proportion from '../Proportion';

import { parseColor, parseGradient, parseUrl, parseElement } from './utils';
import styles from './FillPreview.st.css';

class FillPreview extends React.Component {
  static displayName = 'FillPreview';

  _getBackground = fill => {
    const { disabled } = this.props;

    if (parseUrl(fill) && !disabled) {
      return {
        backgroundImage: `url('${fill}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      };
    }

    if (parseColor(fill) && !disabled) {
      return { backgroundColor: fill };
    }

    if (parseGradient(fill) && !disabled) {
      return {
        backgroundImage: fill,
      };
    }

    if (parseElement(fill) && !disabled) {
      return;
    }

    if (disabled) {
      return;
    }

    return {
      background: `linear-gradient(
        to top left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) calc(50% - 0.8px),
        rgba(214, 69, 61, 1) 50%,
        rgba(255, 255, 255, 1) calc(50% + 0.8px),
        rgba(255, 255, 255, 1) 100%)`,
    };
  };

  render() {
    const {
      fill,
      onClick,
      selected,
      focusableOnFocus,
      focusableOnBlur,
      disabled,
      dataHook,
      aspectRatio,
      ...rest
    } = this.props;
    const background = this._getBackground(fill);
    return (
      <Proportion
        dataHook={dataHook}
        className={styles.root}
        aspectRatio={aspectRatio}
      >
        <button
          {...rest}
          data-selected={selected}
          {...styles('box', { selected }, rest)}
          data-hook="fill-preview-button"
          style={background}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
          onClick={onClick}
          disabled={disabled}
        >
          {!background && React.isValidElement(fill) && fill}
        </button>
      </Proportion>
    );
  }
}

FillPreview.propTypes = {
  /** Color, gradient, image url or svg to be rendered as a preview content */
  fill: oneOfType([string, node]),

  /** Outlines the border when set to true */
  selected: bool,

  /** Pass your handler for click event */
  onClick: func,

  /** Puts the component into a disabled state */
  disabled: bool,

  /** Control elements aspect ratio value:  */
  aspectRatio: oneOfType([string, number]),
};

FillPreview.defaultProps = {
  selected: false,
};

export default withFocusable(FillPreview);
