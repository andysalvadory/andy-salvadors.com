import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SidebarDivider.st.css';

/** A divider within the sidebar that supports inner and full mode */
class SidebarDivider extends React.PureComponent {
  static displayName = 'SidebarDivider';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Indicates whether to remove the margin from sides */
    fullWidth: PropTypes.bool,
  };

  render() {
    const { dataHook, fullWidth } = this.props;

    return (
      <hr
        data-hook={dataHook}
        className={classNames(styles.root, fullWidth && styles.fullWidth)}
      />
    );
  }
}

export default SidebarDivider;
