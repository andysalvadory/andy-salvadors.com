import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../../Heading';
import styles from './ModalHeading.st.css';

const ModalHeading = ({ className, headingAppearance, ...restProps }) => {
  const appearance = headingAppearance === 'custom' ? 'H3' : headingAppearance;
  return (
    <Heading
      {...styles(
        'root',
        { custom: headingAppearance === 'custom' },
        { className },
      )}
      {...restProps}
      appearance={appearance}
    />
  );
};

ModalHeading.propTypes = {
  ...Heading.propTypes,
  headingAppearance: PropTypes.oneOf(['H2', 'custom']),
};

ModalHeading.defaultProps = {
  headingAppearance: 'custom',
};

export default ModalHeading;
