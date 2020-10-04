import { PopoverProps } from './Popover';
import { TooltipNewProps } from './Tooltip'

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
  flip?: PopoverProps['flip'];
  fixed?: PopoverProps['fixed'];
  placement?: PopoverProps['placement'];
  timeout?: PopoverProps['timeout'];
  zIndex?: PopoverProps['zIndex'];
  moveArrowTo?: PopoverProps['moveArrowTo'];
  onMouseEnter?: PopoverProps['onMouseEnter'],
  onMouseLeave?: PopoverProps['onMouseLeave'],
  moveBy?: PopoverProps['moveBy'];
  hideDelay?: PopoverProps['hideDelay'];
  showDelay?: PopoverProps['showDelay'];
  width?: PopoverProps['width'];
  maxWidth?: PopoverProps['maxWidth'];
  minWidth?: PopoverProps['minWidth'];
  dynamicWidth?: PopoverProps['dynamicWidth'];
  excludeClass?: PopoverProps['excludeClass'];
}

export interface TooltipCommonProps {
  appendTo?: TooltipNewProps['appendTo'];
  flip?: TooltipNewProps['flip'];
  fixed?: TooltipNewProps['fixed'];
  placement?: TooltipNewProps['placement'];
  moveBy?: TooltipNewProps['moveBy'];
  enterDelay?: TooltipNewProps['enterDelay'];
  exitDelay?: TooltipNewProps['exitDelay'];
  maxWidth?: TooltipNewProps['maxWidth'];
  textAlign?: TooltipNewProps['textAlign'];
  zIndex?: TooltipNewProps['zIndex'];
  disabled?: TooltipNewProps['disabled'];
  onShow?: TooltipNewProps['onShow'];
  onHide?: TooltipNewProps['onHide'];
}
