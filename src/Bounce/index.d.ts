import * as React from 'react';

export interface BounceProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Bounce extends React.PureComponent<BounceProps>{}
