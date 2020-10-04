import * as React from 'react';
import WixComponent, {
  WixComponentProps,
} from '../BaseComponents/WixComponent';
import { InputStatusError, InputStatusWarning } from '../Input';
import { TooltipOldProps } from '../Tooltip';

export interface InputAreaProps extends WixComponentProps {
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  dataHook?: string;
  size?: InputAreaSize;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  forceFocus?: boolean;
  forceHover?: boolean;
  hasCounter?: boolean;
  id?: string;
  name?: string;
  maxHeight?: string;
  maxLength?: number;
  menuArrow?: boolean;
  minHeight?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onEnterPressed?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onEscapePressed?: () => void;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  resizable?: boolean;
  rows?: number;
  autoGrow?: boolean;
  minRowsAutoGrow?: number;
  style?: InputAreaTheme;
  tabIndex?: number;
  theme?: InputAreaTheme;
  tooltipPlacement?: TooltipOldProps['placement'];
  value?: string;
  status?: InputStatusError | InputStatusWarning;
  statusMessage?: string;
}

export default class InputArea extends WixComponent<InputAreaProps> {
  static MIN_ROWS: 2;

  focus: () => void;
  blur: () => void;
  select: () => void;
}

export type InputAreaSize = 'small' | 'normal';
export type InputAreaTheme = 'normal' | 'paneltitle' | 'material' | 'amaterial';
