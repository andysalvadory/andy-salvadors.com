import * as React from 'react';

export interface ThemeInterface {
  'color-00'?: React.CSSProperties['color'];
  'color-05'?: React.CSSProperties['color'];
  'color-10'?: React.CSSProperties['color'];
  'color-20'?: React.CSSProperties['color'];
  'color-30'?: React.CSSProperties['color'];
  'color-40'?: React.CSSProperties['color'];
  'color-50'?: React.CSSProperties['color'];
  'color-60'?: React.CSSProperties['color'];
}

export interface ThemeProviderProps {
  dataHook?: string;
  theme?: ThemeInterface;
}

export default class ThemeProvider extends React.PureComponent<
  ThemeProviderProps
> {}
