import React, { cloneElement, Component } from 'react';
import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types';
import styles from './ToggleButton.st.css';
import Tooltip from '../Tooltip';
import Text from '../Text';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';

class ToggleButton extends Component {
  static displayName = 'ToggleButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** Button skins */
    skin: oneOf(['standard', 'inverted', 'dark']),
    /** Button shape */
    shape: oneOf(['square', 'round']),
    /** Text */
    text: string,
    /** Text placement */
    textPlacement: oneOf(['hidden', 'side', 'bottom']),
    /** Size */
    size: oneOf(['medium', 'large']),
    /** Click event handler  */
    onClick: func,
    /** Applies selected styles */
    selected: bool,
    /** Applies disabled styles */
    disabled: bool,
    /** String based data hook */
    dataHook: string,
    /** Tooltip content that will appear on hover */
    tooltipContent: node,
    /** Tooltip props */
    tooltipProps: object,
  };

  static defaultProps = {
    skin: 'standard',
    shape: 'square',
    disabled: false,
    size: 'medium',
    textPlacement: 'hidden',
    tooltipContent: '',
    tooltipProps: {
      placement: 'top',
    },
  };

  render() {
    const {
      skin,
      shape,
      size,
      children,
      selected,
      dataHook,
      text,
      textPlacement,
      tooltipContent,
      tooltipProps,
      ...rest
    } = this.props;

    const wrapWithTooltip = node => {
      const content = text || tooltipContent;
      return tooltipContent ? (
        <Tooltip
          upgrade
          {...tooltipProps}
          size="small"
          content={content}
          data-hook={dataHook}
        >
          {node}
        </Tooltip>
      ) : (
        node
      );
    };

    return (
      <div
        {...rest}
        {...styles('root', { skin, selected, textPlacement }, rest)}
      >
        {wrapWithTooltip(
          <ButtonNext
            {...styles('button', { skin, shape, size, selected }, rest)}
            data-hook="togglebutton-trigger"
            data-selected={selected}
            data-skin={skin}
          >
            {children && cloneElement(children, { size: '24px' })}
          </ButtonNext>,
        )}
        {text && textPlacement !== 'hidden' && (
          <Text className={styles.text} size="tiny" weight="thin" ellipsis>
            {text}
          </Text>
        )}
      </div>
    );
  }
}

export default ToggleButton;
