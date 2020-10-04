import React from 'react';
import PropTypes from 'prop-types';
import styles from './Illustration.st.css';
import { dataHooks } from '../../constants';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Illustration = props => {
  const { illustration, illustrationSize } = useBaseModalLayoutContext(props);
  return (
    (illustration && (
      <div
        data-hook={dataHooks.illustration}
        data-size={illustrationSize}
        {...styles('root', { illustrationSize })}
      >
        <div className={styles.imageWrapper}>
          {typeof illustration === 'string' ? (
            <img src={illustration} width="100%" height="100%" />
          ) : (
            illustration
          )}
        </div>
      </div>
    )) ||
    null
  );
};

Illustration.propTypes = {
  /** The illustration src of node */
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The illustration size (relevant when illustration passed is a src string) */
  illustrationSize: PropTypes.oneOf(['small', 'large']),
};

Illustration.defaultProps = { illustrationSize: 'small' };
