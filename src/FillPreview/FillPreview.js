import React from 'react';

import Tooltip from '../Tooltip';
import IconAdd from '../new-icons/Add';
import IconAddSmall from '../new-icons/AddSmall';
import styles from './FillPreview.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';
import Proportion from '../Proportion';
import resolveColor from 'color';
import { getContrastColor, resolveFillType } from './utils';

const COLOR_ICON_EMPTY_COLOR = '#3899ec';

export const FillPreviewAddIconSize = oneOf(['small', 'normal']);
export const FillPreviewMode = oneOf(['fill', 'add']);

function getColorsList(fillInfo) {
  if (fillInfo.color) {
    return [fillInfo.color];
  }

  if (fillInfo.gradient && fillInfo.gradient.length > 0) {
    const colorStops = fillInfo.gradient[0].colorStops;
    if (colorStops) {
      colorStops.map(colorStop => {
        return resolveColor(colorStop);
      });
    }
  }

  return [];
}

const getStyle = (disabled, mode, fillInfo, fill) => {
  if (disabled) {
    return {};
  }

  if (fillInfo.color) {
    return { backgroundColor: fill };
  }

  if (fillInfo.gradient) {
    return {
      backgroundImage: fill,
    };
  }

  if (mode === 'add') {
    // 'add' mode only supports color or gradient
    return {};
  }

  if (fillInfo.url) {
    return {
      backgroundImage: `url('${fill}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    };
  }

  return {};
};

const hasFillMaterial = (disabled, mode, fillInfo) => {
  if (disabled) {
    return false;
  }

  return mode === 'add'
    ? fillInfo.color || fillInfo.gradient
    : fillInfo.color || fillInfo.gradient || fillInfo.url || fillInfo.element;
};

const getColorForAddIcon = (disabled, fillInfo) => {
  return hasFillMaterial(disabled, 'add', fillInfo)
    ? getContrastColor(getColorsList(fillInfo))
    : COLOR_ICON_EMPTY_COLOR;
};

const FillPreviewContent = ({ disabled, mode, addIconSize, fillInfo }) => {
  if (mode === 'add') {
    const color = getColorForAddIcon(disabled, fillInfo);
    const IconComponent = addIconSize === 'small' ? IconAddSmall : IconAdd;

    return (
      <IconComponent
        data-hook="fill-preview-add-icon"
        {...styles('icon')}
        style={{ color }}
      />
    );
  }

  return fillInfo.element || null;
};

class FillPreview extends React.Component {
  render() {
    const {
      fill,
      addIconSize,
      mode,
      onClick,
      selected,
      focusableOnFocus,
      focusableOnBlur,
      disabled,
      dataHook,
      addModeTooltipContent,
      ...rest
    } = this.props;
    const fillInfo = resolveFillType(fill);
    const buttonStyle = getStyle(disabled, mode, fillInfo, fill);
    const noColor = !hasFillMaterial(disabled, mode, fillInfo);
    const tooltipEnabled = addModeTooltipContent && mode === 'add' && !disabled;

    return (
      <Tooltip
        upgrade
        disabled={!tooltipEnabled}
        appendTo="window"
        size="small"
        dataHook={dataHook}
        content={addModeTooltipContent}
      >
        <Proportion className={styles.proportion}>
          <button
            {...styles(
              'root',
              { selected, mode, noColor, clickable: !!onClick },
              rest,
            )}
            data-selected={selected}
            data-hook="fill-preview-button"
            style={buttonStyle}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
            onClick={onClick}
            disabled={disabled}
          >
            <FillPreviewContent
              mode={mode}
              addIconSize={addIconSize}
              fillInfo={fillInfo}
              disabled={disabled}
            />
          </button>
        </Proportion>
      </Tooltip>
    );
  }
}

FillPreview.propTypes = {
  /** Color, gradient, image url or svg to be rendered as a preview content */
  fill: oneOfType([string, node]),

  /** Outlines the border when set to true */
  selected: bool,

  /** Size of add icon */
  addIconSize: FillPreviewAddIconSize,

  /** In 'add' mode the plus icon is displayed. Also influences on empty colors and tooltip behaviour */
  mode: FillPreviewMode,

  /** Pass your handler for click event */
  onClick: func,

  /** Puts the component into a disabled state */
  disabled: bool,

  /** Tooltip text for 'add' mode */
  addModeTooltipContent: string,
};

FillPreview.defaultProps = {
  selected: false,
  addIconSize: 'small',
  mode: 'fill',
};

export default withFocusable(FillPreview);
