import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Content from './Content';
import Header from './Header';
import Subheader from './Subheader';
import Divider from './Divider';
import styles from './Card.scss';

const Card = ({
  stretchVertically,
  hideOverflow,
  className,
  children,
  controls,
  dataHook,
}) => (
  <div
    className={classNames(styles.card, className, {
      [styles.stretchVertically]: stretchVertically,
      [styles.hideOverflow]: hideOverflow,
    })}
    children={children}
    data-hook={dataHook}
  >
    {controls && <div className={styles.controls}>{controls}</div>}
    {children}
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
  /** any node to render inside card */
  children: PropTypes.node,
  /** any node that controls card e.g. a close button */
  controls: PropTypes.node,
  /** makes the card stretch to max height in a container */
  stretchVertically: PropTypes.bool,
  /** makes the card's overflow content to be hidden */
  hideOverflow: PropTypes.bool,
  /** additional css classes */
  className: PropTypes.string,
  dataHook: PropTypes.string,
};

Card.defaultProps = {
  stretchVertically: false,
};

Card.Content = Content;
Card.Header = Header;
Card.Divider = Divider;
Card.Subheader = Subheader;

export default Card;
