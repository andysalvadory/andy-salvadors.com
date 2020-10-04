import {PopoverProps} from "../../Popover";

export interface EllipsisHOCProps {
  ellipsis?: boolean;
  appendTo?: PopoverProps["appendTo"];
  flip?: boolean;
  fixed?: boolean;
  placement?: PopoverProps["placement"];
  timeout?: number;
  maxWidth?: string | number;
  zIndex?: number;
  hideDelay?: number;
  showDelay?: number;
  showTooltip?: boolean;
}
