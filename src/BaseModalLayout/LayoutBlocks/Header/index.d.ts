import * as React from 'react';
import { headingAppearance } from './ModalHeading';

export interface HeaderProps {
  className?: string;
  dataHook?: string;
  title?: string | React.ReactNode;
  titleAppearance?: headingAppearance;
  subtitle?: string;
}

export const Header: React.FunctionComponent<HeaderProps>;
