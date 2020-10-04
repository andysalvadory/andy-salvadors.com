import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.st.css';
import Heading, { APPEARANCES } from '../../../Heading';
import { dataHooks } from '../../constants';
import Text from '../../../Text';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Header = props => {
  const { title, titleAppearance, subtitle } = useBaseModalLayoutContext(props);
  return (
    ((title || subtitle) && (
      <div {...styles('root', {}, props)} data-hook={dataHooks.header}>
        {typeof title === 'string' ? (
          <Heading
            className={styles.title}
            dataHook={dataHooks.headerTitle}
            appearance={titleAppearance}
          >
            {title}
          </Heading>
        ) : (
          title
        )}
        {subtitle && (
          <Text
            className={styles.subtitle}
            secondary
            dataHook={dataHooks.headerSubtitle}
          >
            {subtitle}
          </Text>
        )}
      </div>
    )) ||
    null
  );
};

Header.displayName = 'BaseModalLayout.Header';

Header.propTypes = {
  /** The modal's title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The modal's title */
  titleAppearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
  /** The modal's subtitle */
  subtitle: PropTypes.string,
};

Header.defaultProps = { titleAppearance: 'H3' };
