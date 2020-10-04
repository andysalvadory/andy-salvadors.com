import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bounce.st.css';

function FirstChild({ children }) {
  const childrenArray = React.Children.toArray(children);
  return childrenArray[0] || null;
}

/** Bounce animation component */
class Bounce extends React.PureComponent {
  state = {
    classNames: '',
    animationFinished: false,
    dimensions: null,
  };

  componentDidMount() {
    const { triggerAnimation } = this.props;

    this.setState(
      {
        dimensions: {
          width: this.container.offsetWidth,
          height: this.container.offsetHeight,
        },
      },
      () => (triggerAnimation ? this._startStopAnimation() : null),
    );
  }

  componentDidUpdate(prevProps) {
    const { triggerAnimation, loop } = this.props;

    if (
      prevProps.triggerAnimation !== triggerAnimation ||
      prevProps.loop !== loop
    ) {
      this._startStopAnimation();
    }
  }

  _onAnimationStart = () => {
    const { onEnter } = this.props;
    this.setState(
      {
        animationFinished: false,
      },
      () => onEnter && onEnter(),
    );
  };

  _onAnimationEnd = () => {
    const { onExited } = this.props;
    this.setState(
      {
        animationFinished: true,
        classNames: '',
      },
      () => onExited && onExited(),
    );
  };

  _startStopAnimation = () => {
    const { classNames } = this.state;
    const { loop, delay } = this.props;

    this.setState({
      classNames: classNames ? '' : { ...styles('animation', { loop, delay }) },
    });
  };

  render() {
    const { classNames } = this.state;
    const { children, dataHook } = this.props;

    return (
      <div
        data-hook={dataHook}
        {...classNames}
        onAnimationStart={this._onAnimationStart}
        onAnimationEnd={this._onAnimationEnd}
        ref={el => (this.container = el)}
      >
        <FirstChild children={children} />
      </div>
    );
  }
}

Bounce.displayName = 'Bounce';

Bounce.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** The component which we would like to animate. When given multiple components- only the first child node will be animated. */
  children: PropTypes.node,

  /** Triggers the animation transition */
  triggerAnimation: PropTypes.bool,

  /** A callback fired immediately after the transition enters.*/
  onEnter: PropTypes.func,

  /** A callback fired immediately after the transition finishes.*/
  onExited: PropTypes.func,

  /** when set to true, bounces repetitively until stopped by other event*/
  loop: PropTypes.bool,

  delay: PropTypes.bool,
};

Bounce.defaultProps = {
  children: <div />,
};

export default Bounce;
