import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import deprecationLog from '../utils/deprecationLog';
import { avatarColorList } from './Avatar.const';
import { Avatar as CoreAvatar } from 'wix-ui-core/dist/src/components/avatar';

import styles from './Avatar.st.css';
import { capitalize } from '../utils/cssClassUtils';
import stringToColor from './string-to-color';

const getSizeNumber = size => Number(size.substring(4));
const minIndicationRenderSize = 36;
const minSmallIconButton = 60;
const deprecatedColorList = ['blue', 'green', 'grey', 'red', 'orange'];

/**
 * Avatar is a type of element that visually represents a user, either as an image, name initials or placeholder icon.
 */
const Avatar = props => {
  const {
    size,
    presence,
    indication,
    color: colorProp,
    onIndicationClick,
    dataHook,
    className,
    shape,
    text,
    name,
    ...rest
  } = props;
  if (deprecatedColorList.indexOf(colorProp) > -1) {
    deprecationLog(
      `Avatar component prop "color" with the value ${colorProp} is deprecated, and will be removed in next major release, please use instead one of these color: [${avatarColorList.toString()}]`,
    );
  }
  const color = colorProp || stringToColor(text || name); //if color is provided as a prop use it, otherwise, generate a color based on the text
  const sizeNumber = getSizeNumber(size);
  const renderIndication = indication && sizeNumber > minIndicationRenderSize;
  return (
    <div
      data-hook={dataHook}
      className={classNames(className, styles.externalContainer)}
    >
      <div
        {...styles('avatarContainer', {
          shape,
          size,
          indication,
          presence,
          presenceType: presence,
        })}
      >
        <div className={styles.coreAvatar}>
          <CoreAvatar
            {...{ ...rest, text, name }}
            className={classNames(
              styles.avatar,
              color && styles[`color${capitalize(color)}`],
            )}
          />
        </div>
        {presence && <div className={styles.presence} />}
        {renderIndication && (
          <div className={styles.indication}>
            <IconButton
              className={styles.iconButtonShadow}
              dataHook="avatar-indication"
              onClick={onIndicationClick}
              skin="inverted"
              shape={shape}
              size={sizeNumber > minSmallIconButton ? 'small' : 'tiny'}
            >
              {indication}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

const CoreAvatarPropTypes = {
  /** The name of the avatar user. Text initials will be generated from the name. The name value will be used as default value for html `title` and `aria-label` attributes. And also as default value for the image's `alt` attribute if `imgProps` is provided. */
  name: PropTypes.string,
  /** Text to render as content. */
  text: PropTypes.string,
  /** A node with a placeholder to be rendered as content. Will be displayed if no `text`, `name` or `imgProps` are provided. Defaults to an generic Avatar user icon. */
  placeholder: PropTypes.node,
  /** Props for an `<img>` tag to be rendered as content. */
  imgProps: PropTypes.object,
  /** HTML aria-label attribute value. To be applied on the root element */
  ariaLabel: PropTypes.string,
  /** HTML title attribute value. To be applied on the root element */
  title: PropTypes.string,
};
Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  ...CoreAvatarPropTypes,
  /** Avatar size. Options like 'size90' mean that the width and height are 90px */
  size: PropTypes.oneOf([
    'size90',
    'size72',
    'size60',
    'size48',
    'size36',
    'size30',
    'size24',
    'size18',
  ]),
  /** Background color of the avatar. When no color is provided the color is determined by the provided text or name so that each name will receive a different color. */
  color: PropTypes.oneOf(['A1', 'A2', 'A3', 'A4', 'A5', 'A6']),
  /** Shape of the image, can be square or circle */
  shape: PropTypes.oneOf(['circle', 'square']),
  /** classes to be applied to the root element */
  className: PropTypes.string,
  /** Applied as data-hook HTML attribute that can be used to create an Avatar driver in testing */
  dataHook: PropTypes.string,
  /** Avatar presence. Options like 'online' mean that the conatct is online */
  presence: PropTypes.oneOf(['online', 'offline', 'busy']),
  /** A node to be rendered as Indication.*/
  indication: PropTypes.node,
  /** function which triggered on indication click. Notice it will be clickable just in case `indication` is provided */
  onIndicationClick: PropTypes.func,
};

// Extracted icon as a component, in order to AutoDocs API to show a nice default value.
function AvatarDefaultPlaceholder() {
  return (
    <svg
      className={styles.placeholder}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path d="M40,46.6666667 C40,39.827681 35.7091909,33.9908675 29.6727884,31.7014418 C32.67293,29.8137334 34.6666667,26.4730311 34.6666667,22.6666667 C34.6666667,16.7756293 29.8910373,12 24,12 C18.1089627,12 13.3333333,16.7756293 13.3333333,22.6666667 C13.3333333,26.4730311 15.32707,29.8137334 18.3272116,31.7014418 C12.2908091,33.9908675 8,39.827681 8,46.6666667 L8,48 L40,48 L40,46.6666667 Z" />
    </svg>
  );
}

Avatar.defaultProps = {
  placeholder: <AvatarDefaultPlaceholder />,
  size: 'size48',
  shape: 'circle',
};

export default Avatar;
