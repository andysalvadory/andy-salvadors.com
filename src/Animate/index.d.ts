import * as React from 'react';

export interface AnimateProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Animate extends React.PureComponent<AnimateProps>{}
