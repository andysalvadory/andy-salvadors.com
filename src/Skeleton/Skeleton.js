import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skeleton.st.css';
import { dataHooks } from './constants';

/**
 * Skeleton is a “placeholder” component.
 * Used for filling up screen usually for when some async operation is ongoing.
 */
class Skeleton extends React.PureComponent {
  render() {
    const { dataHook, content, alignment, spacing } = this.props;
    return (
      <div
        data-hook={dataHook}
        data-alignment={alignment}
        data-spacing={spacing}
        {...styles('root', { alignment, spacing }, this.props)}
      >
        {content.map(({ type, size }, key) => (
          <div
            key={key}
            data-hook={dataHooks.line}
            {...styles('line', { alignment, spacing }, this.props)}
          >
            <div
              data-hook={dataHooks.chunk}
              data-type={type}
              data-size={size}
              {...styles('chunk', { size }, this.props)}
            />
          </div>
        ))}
      </div>
    );
  }
}

Skeleton.displayName = 'Skeleton';

Skeleton.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A single CSS class name to be appended to the root element. */
  className: PropTypes.string,

  /** The type of the skeleton */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['line']).isRequired,
      size: PropTypes.oneOf(['small', 'medium', 'large', 'full']).isRequired,
    }),
  ).isRequired,

  /** The position of the indicating progress line */
  alignment: PropTypes.oneOf(['start', 'middle']),

  /** The space between the first and second lines */
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
};

Skeleton.defaultProps = {
  alignment: 'start',
  spacing: 'medium',
  content: [{ type: 'line', size: 'small' }],
};

export default Skeleton;
