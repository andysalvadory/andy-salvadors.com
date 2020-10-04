import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.st.css';

import Check from 'wix-ui-icons-common/Check';
import Text from '../Text';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

const isString = a => typeof a === 'string';

/**
 * # Thumbnail
 * Component for showing thumbnails
 *
 * It takes full space of parent component, works well together with `<Proportion/>`
 * */
class Thumbnail extends React.PureComponent {
  static displayName = 'Thumbnail';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Children to render inside thumbnail. If children passed then title will be rendered below thumbnail */
    children: PropTypes.node,

    /** Title node */
    title: PropTypes.node,

    /** Description node */
    description: PropTypes.node,

    /** Image to display in thumbnail.
     * If given as string, it will be used within `<img/>`.
     * Otherwise can be given as React.Node
     */
    image: PropTypes.node,

    /** Thumbnail size */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Set selected state of thumbnail */
    selected: PropTypes.bool,

    /** Set disabled state of thumbnail */
    disabled: PropTypes.bool,

    /** Hide icon when thumbnail is selected */
    hideSelectedIcon: PropTypes.bool,

    /** Overrides description and image properties. Title is rendered below image thumbnail */
    backgroundImage: PropTypes.node,

    /** Callback function for onClick event */
    onClick: PropTypes.func,

    /** Width of Thumbnail */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Height of Thumbnail */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    size: 'medium',
    selected: false,
    disabled: false,
  };

  _renderBottomTitle = () => {
    const { size, title, selected, disabled } = this.props;

    return (
      <Text
        {...styles('bottomTitle', { selected, disabled }, this.props)}
        data-hook="thumbnail-bottom-title"
        size={size}
        tagName="div"
        weight="thin"
        ellipsis
        children={title}
      />
    );
  };

  _renderBackgroundLayout = () => {
    const { disabled } = this.props;

    return isString(this.props.backgroundImage) ? (
      <div
        {...styles('backgroundImage', { disabled }, this.props)}
        data-hook="thumbnail-background-image"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      />
    ) : (
      this.props.backgroundImage
    );
  };

  _renderNoBackgroundLayout = () => {
    const { title, description, image, size } = this.props;

    return (
      <div>
        {image && (
          <div
            className={styles.image}
            data-hook="thumbnail-image"
            children={isString(image) ? <img src={image} /> : image}
          />
        )}

        {title && (
          <Text
            className={styles.title}
            data-hook="thumbnail-title"
            size={size}
            tagName="div"
            weight="normal"
            children={title}
          />
        )}

        {description && (
          <Text
            className={styles.description}
            data-hook="thumbnail-description"
            size={size}
            weight="thin"
            tagName="div"
            secondary
            children={description}
          />
        )}
      </div>
    );
  };

  _renderThumbnailContent = () => {
    const { backgroundImage, children, disabled } = this.props;
    const hasBackground = !!backgroundImage;
    const hasChildren = !!children;

    if (hasChildren) {
      return (
        <div {...styles('customChild', { disabled }, this.props)}>
          {children}
        </div>
      );
    }

    if (hasBackground) {
      return this._renderBackgroundLayout();
    }

    return this._renderNoBackgroundLayout();
  };

  _renderSelectedIcon = () => (
    <div className={styles.selectedIcon} data-hook="thumbnail-selected-icon">
      <Check size="24" />
    </div>
  );

  _onKeyDown = event =>
    [13 /* enter */, 32 /* space */].some(key => event.keyCode === key) &&
    this.props.onClick(event);

  render() {
    const {
      children,
      dataHook,
      size,
      selected,
      disabled,
      title,
      backgroundImage,
      onClick,
      hideSelectedIcon,
      width,
      height,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;

    const hasChildren = !!children;
    const hasBackground = !!backgroundImage;
    const showBottomTitle = (hasChildren || hasBackground) && title;

    return (
      <div
        style={{ width }}
        {...styles('root', { disabled }, this.props)}
        onClick={disabled ? null : onClick}
        onKeyDown={disabled ? null : this._onKeyDown}
        data-hook={dataHook}
      >
        <div
          style={{ height }}
          {...styles(
            'thumbnail',
            { selected, disabled, size, hasBackground, hasChildren },
            this.props,
          )}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
          tabIndex={disabled ? null : 0}
          data-hook="thumbnail-wrapper"
        >
          {!hideSelectedIcon && selected && this._renderSelectedIcon()}
          {this._renderThumbnailContent()}
        </div>
        {showBottomTitle ? this._renderBottomTitle() : null}
      </div>
    );
  }
}

export default withFocusable(Thumbnail);
