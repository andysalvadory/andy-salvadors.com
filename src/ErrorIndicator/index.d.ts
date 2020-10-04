import * as React from 'react';
import { TooltipOldProps } from '../Tooltip';

export interface ErrorIndicatorProps extends React.HTMLAttributes<HTMLElement> {
  dataHook?: string;
  errorMessage?: string;
  tooltipPlacement?: TooltipOldProps['placement'];
}

export const ErrorIndicator: React.SFC<ErrorIndicatorProps>;
export default ErrorIndicator;
