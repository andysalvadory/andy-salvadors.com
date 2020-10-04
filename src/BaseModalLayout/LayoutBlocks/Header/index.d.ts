import * as React from 'react';
import { HeadingAppearance } from '../../../Heading';

export interface HeaderProps {
  title?: string | React.ReactNode;
  titleAppearance?: HeadingAppearance;
  subtitle?: string;
}

export const Header: React.FunctionComponent<HeaderProps>;
