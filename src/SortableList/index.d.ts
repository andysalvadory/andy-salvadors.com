import WixComponent, { WixComponentProps } from '../BaseComponents/WixComponent';
import { DraggableProps } from '../DragAndDrop/Draggable';

export interface SortableListProps extends WixComponentProps, DraggableProps {
  insertPosition?: SortableListInsertPosition;
  usePortal?: boolean;
  dragPreview?: boolean;
  items?: object[];
  className?: string;
  contentClassName?: string;
}

export default class SortableList extends WixComponent<SortableListProps> {}

export type SortableListInsertPosition = 'start' | 'end' | 'any';
