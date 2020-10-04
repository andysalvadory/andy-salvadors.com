/* Max Height hard coded. Notification Height is hard coded */
/* when changing the transition function to a different value, the animation is not smooth*/
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../../../src/Button';
import style from './MaxHeight.scss';

export function ExampleMaxHeight({ show }) {
  return (
    <div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={{
          enter: style.enterMaxHeight,
          enterActive: style.enterActiveMaxHeight,
          exit: style.exitMaxHeight,
          exitActive: style.exitActiveMaxHeight,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={style.notification}>
          <Button className={style.contentMaxHeight}>Content</Button>
        </div>
      </CSSTransition>
      text text text
    </div>
  );
}
