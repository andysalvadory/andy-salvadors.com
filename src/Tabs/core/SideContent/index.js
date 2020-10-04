import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../Tabs.st.css';

const SideContent = ({ content }) =>
  content ? (
    <div data-content="true" className={styles.sideContent}>
      {content}
    </div>
  ) : null;

SideContent.propTypes = {
  content: PropTypes.node,
};

export default SideContent;
