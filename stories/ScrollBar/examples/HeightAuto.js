import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../../../src/Button';
import style from './HeightAuto.scss';

/* taking in consideration that the height can be maximum of 72 px. */
export function ExampleHeightAuto({ show }) {
  return (
    <div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={{
          enter: style.enterAutoHeight,
          enterActive: style.enterActiveAutoHeight,
          exit: style.exitAutoHeight,
          exitActive: style.exitActiveAutoHeight,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={style.notification}>
          <div className={style.contentAutoHeight}>
            <Button>Content</Button>
            <br />
            dgfdfgdfdfg
            <br />
            fdsfdfdfg
            <br />
            fdfdf
          </div>
        </div>
      </CSSTransition>
      text text text
    </div>
  );
}
