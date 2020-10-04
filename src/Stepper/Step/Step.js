import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import StepCircle from './StepCircle/StepCircle';
import DataHooks from '../dataHooks';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import { ACTIVE_STEP, STEP_TYPES } from '../Consts';

import styles from './Step.st.css';

const KEY_CODES = { ENTER: 13, SPACE: 32 };

class Step extends React.PureComponent {
  static displayName = 'Step';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      stepHover: false,
    };
  }

  _onMouseOver = () => {
    this.setState({ stepHover: true });
  };

  _onMouseOut = () => {
    this.setState({ stepHover: false });
  };

  _onClick = ({ id, type, active }) => {
    const { onClick } = this.props;
    type !== STEP_TYPES.DISABLED && !active && onClick && onClick(id);
  };

  _onKeyUp = e => {
    const { type, active, id } = this.props;
    if (this._enterOrSpace(e.keyCode)) {
      e.preventDefault();
      this._onClick({ id, type, active });
    }
  };

  _onKeyDown = e => {
    if (this._enterOrSpace(e.keyCode)) {
      e.preventDefault();
    }
  };

  _enterOrSpace = keyCode =>
    keyCode === KEY_CODES.ENTER || keyCode === KEY_CODES.SPACE;

  render() {
    const {
      type,
      active,
      id,
      text,
      onFocus,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;
    const { stepHover } = this.state;
    return (
      <div
        data-type={DataHooks.step}
        data-step-type={type ? type : STEP_TYPES.NORMAL}
        data-active={active ? ACTIVE_STEP : ''}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        key={`step${id}`}
        onKeyUp={this._onKeyUp}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        onKeyDown={this._onKeyDown}
        tabIndex={type === STEP_TYPES.DISABLED ? -1 : 0}
        {...styles(
          'root',
          {
            disabled: type === STEP_TYPES.DISABLED,
            selected: active,
          },
          this.props,
        )}
        onClick={() =>
          this._onClick({
            id,
            type,
            active,
          })
        }
      >
        <StepCircle
          number={id + 1}
          active={active}
          type={type}
          stepHover={stepHover}
          className={styles.stepCircle}
          onFocus={() => onFocus(id)}
        />
        <div className={styles.stepTextWrapper}>
          <Text
            ellipsis
            weight={'normal'}
            {...styles(
              'stepText',
              {
                disabled: type === STEP_TYPES.DISABLED,
                selected: active,
                stepHover: stepHover,
                error: type === STEP_TYPES.ERROR,
              },
              this.props,
            )}
          >
            {text}
          </Text>
        </div>
      </div>
    );
  }
}

export default withFocusable(Step);
