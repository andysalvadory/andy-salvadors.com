import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './TimelineItem.st.css';
import { dataHooks } from './constants';

const _isString = a => typeof a === 'string';

/** A timeline item is a display of a timeline event */
class TimelineItem extends React.PureComponent {
  render() {
    const { idx, item, dataHook } = this.props;

    return (
      <li className={styles.event} data-hook={dataHook}>
        <div className={styles.prefix}>
          {item.customPrefix ? (
            <div data-hook={`${dataHooks.timelineBulletIndicator}-${idx}`}>
              {item.customPrefix}
            </div>
          ) : (
            <div
              data-hook={`${dataHooks.timelineDefaultPrefix}-${idx}`}
              className={styles.defaultIndicator}
            />
          )}
          <div className={styles.line} />
        </div>
        <div className={styles.label}>
          <Text
            dataHook={`${dataHooks.timelineLabel}-${idx}`}
            weight="normal"
            size="small"
            className={styles.labelText}
          >
            {item.label}
          </Text>
          {item.labelAction ? (
            <div
              className={styles.labelAction}
              data-hook={`${dataHooks.timelineLabelAction}-${idx}`}
            >
              {item.labelAction}
            </div>
          ) : null}
        </div>
        <div
          className={styles.suffix}
          data-hook={`${dataHooks.timelineSuffix}-${idx}`}
        >
          {item.suffix ? (
            _isString(item.suffix) ? (
              <Text
                dataHook={`${dataHooks.timelineTextSuffix}-${idx}`}
                weight="normal"
                light
                secondary
                size="small"
              >
                {item.suffix}
              </Text>
            ) : (
              item.suffix
            )
          ) : null}
        </div>
      </li>
    );
  }
}

TimelineItem.displayName = 'TimelineItem';

TimelineItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** timeline event item index*/
  idx: PropTypes.number,
  /** timeline event item */
  item: PropTypes.shape({
    /** event text */
    label: PropTypes.string,
    /** action element in the end of event text */
    labelAction: PropTypes.node,
    /**  TODO: still in development. custom bullet element like icon or avatar */
    customPrefix: PropTypes.node,
    /** suffix text or element placed on the right */
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  }).isRequired,
};

export default TimelineItem;
