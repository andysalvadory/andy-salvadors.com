import React, { PureComponent } from 'react';
import styles from './SliderThumb.st.css';
import { dataHooks } from './constants';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

class SliderThumb extends PureComponent {
  render() {
    const { hovered, disabled, focusableOnFocus, focusableOnBlur } = this.props;

    return (
      <div
        {...styles('root', { disabled, hovered }, this.props)}
        onBlur={focusableOnBlur}
        onFocus={focusableOnFocus}
        tabIndex="0"
        data-hook={dataHooks.sliderThumb}
      />
    );
  }
}

export default withFocusable(SliderThumb);
