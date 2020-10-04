import * as React from 'react';

export interface HeaderLayoutProps {
  title?: React.ReactNode;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  closeButton?: boolean;
  theme?: HeaderLayoutTheme;
}
export type HeaderLayoutTheme =
  | 'red'
  | 'green'
  | 'blue'
  | 'lightGreen'
  | 'purple';


declare const HeaderLayout: React.SFC<HeaderLayoutProps>;
export default HeaderLayout;