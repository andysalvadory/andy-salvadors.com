import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button';
import styles from '../TagList.st.css';

const TagListAction = ({ className, ...rest }) => (
  <Button className={classNames(styles.item, className)} {...rest} />
);

TagListAction.displayName = 'TagListAction';

TagListAction.propTypes = {
  dataHook: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TagListAction.defaultProps = {
  size: 'tiny',
  skin: 'inverted',
};

export default TagListAction;
