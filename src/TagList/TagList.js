import React from 'react';
import PropTypes from 'prop-types';
import styles from './TagList.st.css';
import Tag from '../Tag';
import TagListAction from './TagListAction';
import classNames from 'classnames';

const tagToActionButtonSize = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
};

/** TagList */
class TagList extends React.PureComponent {
  render() {
    const { dataHook, tags, actionButton, size, onTagRemove } = this.props;
    const actionButtonSize = tagToActionButtonSize[size];

    return (
      <div className={styles.root} data-hook={dataHook}>
        {tags.map(({ className, ...tagProps }) => (
          <Tag
            {...tagProps}
            className={classNames(styles.item, className)}
            size={size}
            onRemove={onTagRemove}
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
  }
}

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** List of tags props to be rendered */
  tags: PropTypes.arrayOf(PropTypes.object),

  /** Callback function that passes `id` property as parameter when removing a Tag  */
  onTagRemove: PropTypes.func,

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
