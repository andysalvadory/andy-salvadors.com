import React from 'react';
import PropTypes from 'prop-types';
import styles from './Theme.st.css';
import calc_theme from './calc_theme';
import { ThemeContext } from './context';

/** Customize colors */
class Theme extends React.PureComponent {
  render() {
    const { theme, children, custom = {} } = this.props;
    const style = {};

    if (custom) {
      if (custom.hasOwnProperty('color'))
        Object.assign(style, calc_theme(custom.color));

      if (custom.hasOwnProperty('radius'))
        style['--wsr-theme-radius'] = custom.radius;

      if (custom.hasOwnProperty('spacing'))
        style['--wsr-theme-spacing'] = custom.spacing + 'px';

      if (custom.hasOwnProperty('fontFamily'))
        style[
          '--wsr-theme-font-family'
        ] = `${custom.fontFamily}, 'Times New Roman'`;

      if (custom.hasOwnProperty('fontSize'))
        style['--wsr-theme-font-size'] = custom.fontSize;

      if (custom.hasOwnProperty('borders')) {
        ['top', 'left', 'bottom', 'right'].forEach(
          border =>
            (style[`--wsr-theme-borders-${border}`] =
              !custom.borders.includes(border) && 'transparent'),
        );
      }

      if (custom.slider) {
        const slider = custom.slider;
        if (slider.thickness) {
          style['--wsr-theme-slider-thickness'] = slider.thickness;
        }
        if (slider.handle) {
          style['--wsr-theme-slider-handle'] = slider.handle;
        }
      }

      if (custom.tabs) {
        const tabs = custom.tabs;
        if (tabs.thickness) {
          style['--wsr-theme-tabs-thickness'] = tabs.thickness;
        }
      }
    }

    return (
      <ThemeContext.Provider value={{ style }}>
        <span
          {...styles('root', { theme }, this.props)}
          children={children}
          style={style}
        />
      </ThemeContext.Provider>
    );
  }
}

Theme.displayName = 'Theme';

Theme.propTypes = {
  theme: PropTypes.string,
};

Theme.defaultProps = {
  theme: 'standard',
};

export default Theme;
