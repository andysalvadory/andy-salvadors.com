import React from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarHeader.st.css';
import { dataHooks } from './constants';
import Text from '../Text';

/** A header within the sidebar with title, subtitle and custom content at the bottom. */
class SidebarHeader extends React.PureComponent {
  static displayName = 'SidebarHeader';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** A text to show as the header title */
    title: PropTypes.string.isRequired,
    /** A text to show as the header subtitle */
    subtitle: PropTypes.string,
    /** A custom node to render from the bottom */
    children: PropTypes.node,
  };

  render() {
    const { dataHook, title, subtitle, children } = this.props;

    return (
      <div data-hook={dataHook} {...styles('root', {}, this.props)}>
        <Text
          dataHook={dataHooks.title}
          className={styles.title}
          size="medium"
          weight="bold"
          light
          ellipsis
        >
          {title}
        </Text>
        <Text
          dataHook={dataHooks.subtitle}
          className={styles.subtitle}
          size="tiny"
          weight="thin"
          light
          ellipsis
        >
          {subtitle}
        </Text>
        {children && <div data-hook={dataHooks.children}>{children}</div>}
      </div>
    );
  }
}

export default SidebarHeader;
