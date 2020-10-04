import React, { PureComponent } from 'react';
import { generateDataAttr } from '../utils/generateDataAttr';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import Close from 'wix-ui-icons-common/system/Close';
import CloseLarge from 'wix-ui-icons-common/system/CloseLarge';
import { SIZES } from './constants';
import cx from 'classnames';

import { oneOfType, string, node, oneOf, object, bool, func } from 'prop-types';
import styles from './CloseButton.st.css';

class CloseButton extends PureComponent {
  static displayName = 'CloseButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** additional css classes */
    className: string,
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** skins of closebutton */
    skin: oneOf([
      'standard',
      'standardFilled',
      'light',
      'lightFilled',
      'dark',
      'transparent',
    ]),
    /** size of closebutton */
    size: oneOf(['small', 'medium']),
    /** Click event handler  */
    onClick: func,
    /** applies disabled styles */
    disabled: bool,
    /** string based data hook for testing */
    dataHook: string,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'small',
    disabled: false,
  };

  render() {
    const {
      skin,
      size,
      className: userClassName,
      dataHook,
      children,
      ...rest
    } = this.props;

    const CloseIcon = <Close data-hook="close" />;
    const CloseLargeIcon = <CloseLarge data-hook="close-large" />;

    const childSize = '18px';

    const { className } = styles('root', { skin, size });
    const classNames = cx(className, userClassName);

    return (
      <ButtonNext
        {...rest}
        {...styles('root', { skin, size }, this.props)}
        {...generateDataAttr(this.props, ['skin', 'size'])}
        data-hook={dataHook}
        className={classNames}
      >
        {children
          ? React.cloneElement(children, {
              size: childSize,
              width: childSize,
              height: childSize,
            })
          : size === SIZES.small // fallback to Close icon if children not provided (current behavior)
          ? CloseIcon
          : CloseLargeIcon}
      </ButtonNext>
    );
  }
}

export default CloseButton;
