import * as React from 'react';
import { BaseModalLayoutProps } from '../BaseModalLayout';

export interface CustomModalLayoutProps extends BaseModalLayoutProps {
  className?: string;
  dataHook?: string;
  width?: string;
}

export default class CustomModalLayout extends React.PureComponent<
  CustomModalLayoutProps
> {}
