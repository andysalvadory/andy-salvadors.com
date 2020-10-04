import * as React from 'react';
import {ButtonWithAsProp} from '../Button';

export type FillPreviewProps = ButtonWithAsProp<{
  fill?: React.ReactNode;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  tabIndex?: number;
  aspectRatio?: string | number;
  dataHook?: string;
}>;

export default class FillPreview extends React.Component<FillPreviewProps> {}
