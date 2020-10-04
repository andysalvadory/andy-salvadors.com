import * as React from 'react';
import WixComponent, { WixComponentProps } from '../BaseComponents/WixComponent';

export interface ModalProps extends WixComponentProps {
  isOpen: boolean;
  borderRadius?: number;
  contentLabel?: string;
  theme?: ModalTheme;
  zIndex?: number;
  shouldCloseOnOverlayClick?: boolean;
  shouldDisplayCloseButton?: boolean;
  onRequestClose?: (event?: React.MouseEvent | React.KeyboardEvent) => void;
  onAfterOpen?: () => void;
  horizontalPosition?: ModalHorizontalPostion;
  verticalPosition?: ModalVerticalPosition;
  closeTimeoutMS?: number;
  scrollable?: boolean;
  scrollableContent?: boolean;
  maxHeight?: string;
  height?: string;
  overlayPosition?: ModalOverlayPosition;
  parentSelector?: () => HTMLElement;
  appElement?: string;
  onOk?: () => void;
}

export default class Modal extends WixComponent<ModalProps> {}

export type ModalTheme = 'blue' | 'red' | 'green' | 'white';
export type ModalHorizontalPostion = 'start' | 'center' | 'end';
export type ModalVerticalPosition = 'start' | 'center' | 'end';
export type ModalOverlayPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';
