import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Cell } from '../../src/Layout';
import { ExampleMaxHeight } from './examples/MaxHeight.js';
import { Category } from '../storiesHierarchy';
import Button from '../../src/Button';
import style from './examples/MaxHeight.scss';
import { ExampleAnimator } from './examples/Animator';
import { ExampleAnimator2 } from './examples/Animator2';
import { ExampleHeightAuto } from './examples/HeightAuto';
import Heading from '../../src/Heading';

storiesOf(Category.FOUNDATION, module).add('1.8 ScrollBar', () => {
  const [show, setShow] = React.useState(false);

  return (
    <Layout>
      {/* <Cell>*/}
      {/*  <Heading>Height is known and hard coded</Heading>*/}
      {/*  <ExampleMaxHeight show={show} />*/}
      {/* </Cell>*/}
      {/* <Cell>*/}
      {/*  <Heading>*/}
      {/*    Using Animator for both Notification and Notification content*/}
      {/*  </Heading>*/}
      {/*  <ExampleAnimator show={show} />*/}
      {/* </Cell>*/}
      {/* <Cell>*/}
      {/*  <Heading>Animation for height 72px</Heading>*/}
      {/*  <ExampleHeightAuto show={show} />*/}
      {/* </Cell>*/}
      <Cell>
        <Heading>Dynamic height Animation using Animator</Heading>
        <ExampleAnimator2 show={show} />
      </Cell>
      <Cell>
        <Button className={style.button} onClick={() => setShow(!show)}>
          Close
        </Button>
      </Cell>
    </Layout>
  );
});
