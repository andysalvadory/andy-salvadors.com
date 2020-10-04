import React, { PureComponent } from 'react';
import { node, string, oneOf } from 'prop-types';
import Text from '../../Text';
import Box from '../../Box';
import styles from './Subheader.st.css';
import classNames from 'classnames';

const isString = a => typeof a === 'string';

class Subheader extends PureComponent {
  static displayName = 'Card.Subheader';

  static defaultProps = {
    skin: 'standard',
  };

  static propTypes = {
    /** card title */
    title: node.isRequired,

    /** suffix node that will be rendered on the right side */
    suffix: node,

    /** data hook */
    dataHook: string,

    /** skin  */
    skin: oneOf(['standard', 'neutral']),
  };

  render() {
    const { title, suffix, dataHook, skin } = this.props;

    return (
      <div
        className={classNames(styles.container, {
          [styles.standard]: skin === 'standard',
          [styles.neutral]: skin === 'neutral',
        })}
        data-hook={dataHook}
      >
        <Box verticalAlign="middle" flexGrow={1} overflow="hidden">
          {isString(title) ? (
            <Text ellipsis weight="normal" size="medium" dataHook="title">
              {title}
            </Text>
          ) : (
            <div data-hook="title-node">{title}</div>
          )}
        </Box>

        {suffix && (
          <div className={styles.suffix} data-hook="suffix-node">
            {suffix}
          </div>
        )}
      </div>
    );
  }
}

export default Subheader;
