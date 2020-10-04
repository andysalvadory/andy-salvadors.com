import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Animate.st.css';
import { dataHooks } from './constants';

function FirstChild({ children }) {
  const childrenArray = Children.toArray(children);
  return childrenArray[0] || null;
}

/** Animate component */
class Animate extends PureComponent {
  state = {
    width: 0,
  };

  render() {
    const {
      dataHook,
      triggerAnimation,
      children,
      onEnter,
      onExited,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        {...styles('animateBoundingBox', {}, this.props)}
      >
        <CSSTransition
          in={triggerAnimation}
          timeout={300}
          classNames={{
            // appear: styles.appear,
            // appearActive: styles.appearActive,
            // appearDone: styles.appearDone,
            enter: styles.enter,
            enterActive: styles.enterActive,
            // enterDone: styles.enterActive,
            exit: styles.exit,
            exitActive: styles.exitActive,
            // exitDone: styles.exitDone,
          }}
          onEnter={onEnter}
          onExited={onExited}
        >
          <div
            data-hook={dataHooks.animateContent}
            className={styles.animateContent}
          >
            <FirstChild children={children} />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

Animate.displayName = 'Animate';

Animate.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** The component which we would like to animate. When given multiple components- only the first child node will be animated. */
  children: PropTypes.node,

  /** Triggers the enter or exit states of the component. */
  triggerAnimation: PropTypes.bool,

  /** A callback fired immediately after the 'enter' or 'appear' class is applied.*/
  onEnter: PropTypes.func,

  /** A callback fired immediately after the 'exit' class is applied.*/
  onExited: PropTypes.func,
};

Animate.defaultProps = {};

export default Animate;
