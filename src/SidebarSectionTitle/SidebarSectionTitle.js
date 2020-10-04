import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarSectionTitle.st.css';
import Text from '../Text';

/** A title for the section within the sidebar */
class SidebarSectionTitle extends React.PureComponent {
  static displayName = 'SidebarSectionTitle';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Usually plain text, but could be any renderable node */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { dataHook, children } = this.props;

    return (
      <Text
        data-hook={dataHook}
        {...styles('root')}
        size="tiny"
        weight="bold"
        ellipsis
      >
        {children}
      </Text>
    );
  }
}

export default SidebarSectionTitle;
