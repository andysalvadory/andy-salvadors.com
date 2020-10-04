import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.st.css';

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['medium', 'large']),
  };

  _getChildName = children =>
    children.type && (children.type.displayName || children.type.name);

  render() {
    const { children, size } = this.props;
    const isEmptyStateContent = this._getChildName(children) === 'EmptyState';

    return (
      <div
        {...styles('root', { size, emptyStateContent: isEmptyStateContent })}
      >
        {children}
      </div>
    );
  }
}

export default Content;
