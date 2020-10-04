import styles from './Footnote.st.css';
import Divider from '../../../Divider';
import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from '../../constants.js';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Footnote = props => {
  const { footnote } = useBaseModalLayoutContext(props);
  return (
    (footnote && (
      <div {...styles('root')} data-hook={dataHooks.footnote}>
        <Divider />
        <div className={styles.innerContent}>{footnote}</div>
      </div>
    )) ||
    null
  );
};

Footnote.displayName = 'BaseModalLayout.Footnote';

Footnote.propTypes = {
  /** a footnote node, to be rendered at the very bottom of the modal */
  footnote: PropTypes.node,
};
