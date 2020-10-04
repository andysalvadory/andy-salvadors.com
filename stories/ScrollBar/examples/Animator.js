import React from 'react';
import { Animator } from 'wix-animations';
import Button from '../../../src/Button';
import style from './Animator.scss';

export function ExampleAnimator({ show }) {
  return (
    <div>
      <Animator show={show} height>
        <div className={style.notification}>
          <Animator show={show} height>
            <Button>Content</Button>
          </Animator>
        </div>
      </Animator>
      text text text
    </div>
  );
}
