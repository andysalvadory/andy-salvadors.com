import * as React from 'react';


export interface ThemeProps {
  dataHook?: string;
  buttonText?: string;
}

export default class Theme extends React.PureComponent<ThemeProps>{}
