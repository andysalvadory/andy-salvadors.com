import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Heading from '../../Heading';
import Tooltip from '../../Tooltip';
import Badge from '../../Badge';
import SortByArrowUp from '../../new-icons/system/SortByArrowUp';
import SortByArrowDown from '../../new-icons/system/SortByArrowDown';
import InfoCircleSmall from '../../new-icons/InfoCircleSmall';

import DataHooks from '../dataHooks';
import DataAttrs from '../dataAttrs';

import styles from './StatisticsItem.st.css';

class StatisticsItem extends React.PureComponent {
  static displayName = 'StatisticsItem';

  _getFocusableProps = () => {
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;

    return onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};
  };

  _getSpaceOrEnterHandler = handler => event => {
    const { key } = event;
    const isEnter = key === 'Enter';
    const isSpace = key === ' ';

    if (isEnter || isSpace) {
      handler(event);
      event.preventDefault();
    }
  };

  _renderValue = (value, valueInShort) => {
    if (!valueInShort) {
      return (
        <Heading ellipsis appearance="H1" dataHook={DataHooks.value}>
          {value}
        </Heading>
      );
    }

    return (
      <Heading appearance="H1" className={styles.headerWrapper}>
        <div className={styles.headerShort}>
          <Tooltip
            upgrade
            {...styles('tooltip', {}, this.props)}
            content={value}
          >
            <span
              data-hook={DataHooks.shortValue}
              aria-hidden="true"
              title={value}
            >
              {valueInShort}
            </span>
          </Tooltip>
        </div>
        <span data-hook={DataHooks.value} className={styles.headerFull}>
          {value}
        </span>
      </Heading>
    );
  };

  _renderDescription = (description, subtitleContentInfo) => {
    if (!description) {
      return null;
    }

    return (
      <div className={styles.description}>
        <Heading ellipsis data-hook={DataHooks.description} appearance="H5">
          {description}
        </Heading>
        {subtitleContentInfo && (
          <Tooltip
            upgrade
            {...styles('tooltip', {}, this.props)}
            dataHook={DataHooks.tooltip}
            content={subtitleContentInfo}
          >
            <InfoCircleSmall
              className={styles.info}
              data-hook={DataHooks.info}
            />
          </Tooltip>
        )}
      </div>
    );
  };

  _renderPercents = (percentage, invertedPercentage = false) => {
    if (isNaN(Number(percentage))) {
      return null;
    }

    let skin = 'neutral';
    let trendIcon = null;

    if (percentage > 0) {
      trendIcon = <SortByArrowUp data-hook={DataHooks.trendUp} />;
      skin = !invertedPercentage ? 'success' : 'danger';
    } else if (percentage < 0) {
      trendIcon = <SortByArrowDown data-hook={DataHooks.trendDown} />;
      skin = !invertedPercentage ? 'danger' : 'success';
    }

    const badgeProps = {
      type: 'transparent',
      dataHook: DataHooks.percentage,
      [DataAttrs.invertedPercentage]: invertedPercentage,
      skin,
    };

    return (
      <Badge {...badgeProps} className={styles.percentage}>
        <div className={styles.percentageInner}>
          {!!percentage && (
            <span
              className={styles.trendIndicator}
              data-hook={DataHooks.trendIndicator}
            >
              {trendIcon}
            </span>
          )}
          {Math.abs(percentage)}%
        </div>
      </Badge>
    );
  };

  render() {
    const {
      value,
      valueInShort,
      description,
      descriptionInfo,
      percentage,
      invertedPercentage,
      onClick,
    } = this.props;

    const attrs = {
      ...this._getFocusableProps(),
      ...styles('item', { clickable: !!onClick }, this.props),
      'data-hook': DataHooks.stat,
      onKeyDown: onClick ? this._getSpaceOrEnterHandler(onClick) : undefined,
      onClick,
    };

    return (
      <div {...attrs}>
        {this._renderValue(value, valueInShort)}
        {this._renderDescription(description, descriptionInfo)}
        {this._renderPercents(percentage, invertedPercentage)}
      </div>
    );
  }
}

export default withFocusable(StatisticsItem);
