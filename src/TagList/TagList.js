import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TagList.st.css';
import Tag from '../Tag';
import classNames from 'classnames';

const tagToActionButtonSize = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
};

/** TagList */
const TagList = ({ dataHook, tags, actionButton, size }) => {
  const actionButtonSize = tagToActionButtonSize[size];

  return (
    <div className={styles.root} data-hook={dataHook}>
      {tags.map(({ className, ...tagProps }) => (
        <Tag
          {...tagProps}
          className={classNames(styles.item, className)}
          size={size}
          key={tagProps.id}
        />
      ))}
      {actionButton && (
        <TagListAction
          dataHook="tag-list-action"
          size={actionButtonSize}
          onClick={actionButton.onClick}
        >
          {actionButton.label}
        </TagListAction>
      )}
    </div>
  );
};

const TagListAction = ({
  dataHook,
  className,
  onClick,
  children,
  size,
  ...rest
}) => (
  <Button
    skin="inverted"
    size={size}
    className={classNames(styles.item, className)}
    dataHook={dataHook}
    onClick={onClick}
    {...rest}
  >
    {children}
  </Button>
);

TagListAction.propTypes = {
  dataHook: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
};

TagListAction.defaultProps = {
  size: 'tiny',
};

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** List of tags props to be rendered */
  tags: PropTypes.arrayOf(PropTypes.object),

  /** The size of each individual `<Tag />` */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Action button label and onClick handler */
  actionButton: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
};

TagList.defaultProps = {
  size: 'small',
};

export default TagList;
