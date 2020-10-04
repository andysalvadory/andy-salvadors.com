import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';

import styles from './SidebarSectionItem.st.css';
import { dataHooks } from './constants';
import Text from '../Text';

/** An item for the section within the sidebar */
class SidebarSectionItem extends React.PureComponent {
  static displayName = 'SidebarSectionItem';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Usually plain text, but could be any node */
    children: PropTypes.node.isRequired,
    /** An element to appear at the beginning of the text */
    prefix: PropTypes.node,
    /** An element to appear at the end of the text */
    suffix: PropTypes.node,
    /** Indicates whether to display the item as selected */
    selected: PropTypes.bool,
    /** Indicates whether to display the item as disabled */
    disabled: PropTypes.bool,
    /** Indicates whether to display an icon for drilling in on hover */
    drillable: PropTypes.bool,
    /** A callback to be triggered on click */
    onClick: PropTypes.func,
  };

  render() {
    const {
      dataHook,
      children,
      selected,
      disabled,
      drillable,
      prefix,
      suffix,
      onClick,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        onClick={!disabled ? onClick : undefined}
        {...styles(
          'root',
          { selected, disabled, prefix, suffix, drillable },
          this.props,
        )}
      >
        {prefix && (
          <span data-hook={dataHooks.prefix} className={styles.prefix}>
            {prefix}
          </span>
        )}
        <Text className={styles.text} size="small" weight="bold" light>
          {children}
        </Text>
        {!disabled && !suffix && drillable && (
          <ChevronRight className={styles.chevron} />
        )}
        {!disabled && suffix && (
          <span data-hook={dataHooks.suffix}>{suffix}</span>
        )}
      </div>
    );
  }
}

export default withFocusable(SidebarSectionItem);
