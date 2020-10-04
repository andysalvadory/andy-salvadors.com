import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footnote.st.css';
import Divider from '../../../Divider';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Footnote = ({ dataHook, className, children }) => {
  const {
    footnoteClassName,
    footnote = children,
  } = useBaseModalLayoutContext();
  className = classNames(footnoteClassName, className);
  return (
    (footnote && (
      <div data-hook={dataHook} {...styles('root', {}, { className })}>
        <Divider />
        <div className={styles.innerContent}>{footnote}</div>
      </div>
    )) ||
    null
  );
};

Footnote.displayName = 'BaseModalLayout.Footnote';

Footnote.propTypes = {
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** a footnote node, to be rendered at the very bottom of the modal */
  footnote: PropTypes.node,
};
