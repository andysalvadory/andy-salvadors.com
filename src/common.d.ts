import { PopoverProps } from './Popover';
import { TooltipProps } from './Tooltip';

export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

export type IconElement = React.ReactElement<any>;

export type WixComponentClickOutsideEventHandler = (
  e: TouchEvent | MouseEvent,
) => void;

export type OmitPolyfill<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface FocusOptionsPolyfill {
  preventScroll?: boolean;
}

export type MoveByOffset = { x?: number; y?: number };

export interface PopoverCommonProps {
  appendTo?: PopoverProps['appendTo'];
  dynamicWidth?: PopoverProps['dynamicWidth'];
  excludeClass?: PopoverProps['excludeClass'];
  flip?: PopoverProps['flip'];
  fixed?: PopoverProps['fixed'];
  hideDelay?: PopoverProps['hideDelay'];
  moveArrowTo?: PopoverProps['moveArrowTo'];
  moveBy?: PopoverProps['moveBy'];
  onMouseEnter?: PopoverProps['onMouseEnter'];
  onMouseLeave?: PopoverProps['onMouseLeave'];
  placement?: PopoverProps['placement'];
  showDelay?: PopoverProps['showDelay'];
  timeout?: PopoverProps['timeout'];
  maxWidth?: PopoverProps['maxWidth'];
  minWidth?: PopoverProps['minWidth'];
  width?: PopoverProps['width'];
  zIndex?: PopoverProps['zIndex'];
}

export interface TooltipCommonProps {
  appendTo?: TooltipProps['appendTo'];
  disabled?: TooltipProps['disabled'];
  enterDelay?: TooltipProps['enterDelay'];
  exitDelay?: TooltipProps['exitDelay'];
  fixed?: TooltipProps['fixed'];
  flip?: TooltipProps['flip'];
  maxWidth?: TooltipProps['maxWidth'];
  moveBy?: TooltipProps['moveBy'];
  moveArrowTo?: TooltipProps['moveArrowTo'];
  onHide?: TooltipProps['onHide'];
  onShow?: TooltipProps['onShow'];
  placement?: TooltipProps['placement'];
  textAlign?: TooltipProps['textAlign'];
  zIndex?: TooltipProps['zIndex'];
}

export type StatusIndications = 'error' | 'warning' | 'loading';
