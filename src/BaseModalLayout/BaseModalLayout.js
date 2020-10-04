import React from 'react';
import PropTypes from 'prop-types';

import styles from './BaseModalLayout.st.css';
import { dataHooks } from './constants';
import CloseButton from '../CloseButton';
import Help from 'wix-ui-icons-common/system/Help24';
import { BaseModalLayoutContext } from './BaseModalLayoutContext';
import {
  Header,
  Content,
  Footer,
  Footnote,
  Illustration,
} from './LayoutBlocks';
import Box from '../Box';

const classNames = {
  headerClassName: styles.header,
  contentClassName: styles.content,
  footerClassName: styles.footer,
  footnoteClassName: styles.footnote,
  illustrationClassName: styles.illustration,
};

/** Private component to be used by all public modals. Represents the common internals of all modals */
class BaseModalLayout extends React.PureComponent {
  static Header = Header;
  static Content = Content;
  static Footer = Footer;
  static Footnote = Footnote;
  static Illustration = Illustration;
  render() {
    const {
      dataHook,
      className,
      children,
      style,
      onCloseButtonClick,
      onHelpButtonClick,
      ...restProps
    } = this.props;
    const { theme } = restProps;
    const showControlButtons = onCloseButtonClick || onHelpButtonClick;
    return (
      <div
        data-hook={dataHook}
        data-theme={theme}
        style={style}
        {...styles('root', { theme }, { className, ...restProps })}
      >
        <BaseModalLayoutContext.Provider
          value={{ ...restProps, ...classNames }}
        >
          {children}
        </BaseModalLayoutContext.Provider>
        {showControlButtons && (
          <Box
            gap="SP1"
            direction="horizontal"
            className={styles.controlButtons}
          >
            {onHelpButtonClick && (
              <CloseButton
                dataHook={dataHooks.helpButton}
                onClick={onHelpButtonClick}
                size="large"
                skin="dark"
              >
                <Help className={styles.helpButton} />
              </CloseButton>
            )}
            {onCloseButtonClick && (
              <CloseButton
                dataHook={dataHooks.closeButton}
                onClick={onCloseButtonClick}
                size="large"
                skin="dark"
              />
            )}
          </Box>
        )}
      </div>
    );
  }
}

BaseModalLayout.propTypes = {
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** callback for when the close button is clicked */
  onCloseButtonClick: PropTypes.func,
  /** callback for when the help button is clicked */
  onHelpButtonClick: PropTypes.func,
  /** a global theme for the modal, will be applied as stylable state and will affect footer buttons skin */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),
};

BaseModalLayout.defaultProps = {
  theme: 'standard',
};

BaseModalLayout.displayName = 'BaseModalLayout';
export default BaseModalLayout;
