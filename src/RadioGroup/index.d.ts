import * as React from 'react';
import WixComponent, {WixComponentProps } from '../BaseComponents/WixComponent';

export interface RadioGroupProps extends WixComponentProps {
  onChange?: RadioButtonProps['onChange'];
  value?: RadioButtonProps['value'];
  disabledRadios?: Array<RadioButtonProps['value']>;
  vAlign?: RadioButtonProps['vAlign'];
  disabled?: RadioButtonProps['disabled'];
  type?: RadioButtonProps['type'];
  display?: RadioGroupDisplay;
  selectionArea?: RadioButtonProps['selectionArea'];
  spacing?: string;
  lineHeight?: string;
}

export default class RadioGroup extends WixComponent<RadioGroupProps> {
  static Radio: typeof RadioButton;
}

export type RadioGroupDisplay = 'vertical' | 'horizontal';

export interface RadioButtonProps extends WixComponentProps {
  value?: string | number;
  vAlign?: RadioButtonVAlign;
  name?: string;
  onChange?: (value: RadioButtonProps['value']) => void;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: RadioButtonType;
  lineHeight?: string;
  tabIndex?: number;
  selectionArea?: RadioButtonSelectionArea;
  content?: React.ReactNode;
}

export type RadioButtonVAlign = 'center' | 'top';
export type RadioButtonType = 'default' | 'button';
export type RadioButtonSelectionArea = 'none' | 'hover' | 'always';

export class RadioButton extends WixComponent<RadioButtonProps> {}
