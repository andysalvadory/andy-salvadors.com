import styles from './Footer.st.css';
import Button from '../../../Button';
import { dataHooks } from '../../constants';
import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../Divider';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Footer = props => {
  const {
    theme,
    actionsSize,
    showFooterDivider,
    sideActions,
    secondaryButtonText,
    secondaryButtonOnClick,
    secondaryButtonProps,
    primaryButtonText,
    primaryButtonOnClick,
    primaryButtonProps,
  } = useBaseModalLayoutContext(props);
  const hasPrimaryButton =
    primaryButtonText || primaryButtonOnClick || primaryButtonProps;
  const hasSecondaryButton =
    secondaryButtonText || secondaryButtonOnClick || secondaryButtonProps;
  const hasFooter = hasPrimaryButton || hasSecondaryButton || sideActions;
  return (
    (hasFooter && (
      <div
        {...styles('root', { showDivider: showFooterDivider })}
        data-hook={dataHooks.footer}
        data-divider={showFooterDivider}
      >
        <Divider
          className={styles.divider}
          dataHook={dataHooks.footerDivider}
        />
        <div className={styles.innerContent}>
          {sideActions && (
            <div
              data-hook={dataHooks.footerSideActions}
              className={styles.sideActions}
            >
              {sideActions}
            </div>
          )}
          <div className={styles.actions}>
            {hasSecondaryButton && (
              <Button
                skin={theme}
                size={actionsSize}
                onClick={secondaryButtonOnClick}
                priority="secondary"
                {...secondaryButtonProps}
                dataHook={dataHooks.footerSecondaryButton}
              >
                {secondaryButtonText}
              </Button>
            )}
            {hasPrimaryButton && (
              <Button
                skin={theme}
                size={actionsSize}
                onClick={primaryButtonOnClick}
                {...primaryButtonProps}
                dataHook={dataHooks.footerPrimaryButton}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    )) ||
    null
  );
};

Footer.displayName = 'BaseModalLayout.Footer';

Footer.propTypes = {
  /** a theme for the Footer, will affect footer action buttons skin */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),
  /** will determine the action buttons size*/
  actionsSize: Button.propTypes.size,
  /** a text for the primary action button */
  primaryButtonText: PropTypes.string,
  /** a callback for when the primary action button is clicked */
  primaryButtonOnClick: PropTypes.func,
  /** Passed to the primary action button as props without any filter / mutation */
  primaryButtonProps: (() => {
    const { dataHook, onClick, ...buttonProps } = Button.propTypes;
    return PropTypes.shape(buttonProps);
  })(),
  /** a text for the secondary action button */
  secondaryButtonText: PropTypes.string,
  /** callback for when the secondary action button is clicked */
  secondaryButtonOnClick: PropTypes.func,
  /** Passed to the secondary button as props without any filter / mutation */
  secondaryButtonProps: (() => {
    const { dataHook, onClick, priority, ...buttonProps } = Button.propTypes;
    return PropTypes.shape(buttonProps);
  })(),
  /** side actions node, to be rendered as the first element on the same row as the action buttons */
  sideActions: PropTypes.node,
  /** shows the footer divider */
  showFooterDivider: PropTypes.bool,
};

Footer.defaultProps = {
  theme: 'standard',
  actionsSize: 'small',
  showFooterDivider: false,
};
