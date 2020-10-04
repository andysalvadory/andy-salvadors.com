import * as React from 'react';
import { BaseModalLayoutProps } from '../BaseModalLayout';

export interface AnnouncementModalLayoutProps extends BaseModalLayoutProps {
  className?: string;
  dataHook?: string;
  illustration?: React.ReactNode;
  theme?: 'standard' | 'premium';
  linkText?: string;
  linkOnClick?: () => void;
}

export default class AnnouncementModalLayout extends React.PureComponent<
  AnnouncementModalLayoutProps
> {}
